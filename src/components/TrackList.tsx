import { unknownTrackImageURI } from '@/constants/images';
import { useQueue } from '@/store/queue';
import { utilsStyles } from '@/styles';
import React, { useRef } from 'react';
import { FlatList, FlatListProps, Text, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import TrackPlayer, { Track } from 'react-native-track-player';
import TrackListItem from './TrackListItem';

export type TracksListProps = Partial<FlatListProps<Track>> & {
    id: string,
    tracks: Track[]
}

const itemDivider = () => {
    return <View style={{ ...utilsStyles.itemSeparator, marginVertical: 9, marginLeft: 60 }} />
}

const TrackList = ({ id, tracks, ...flatlistProps }: TracksListProps) => {
    const queueOffSet = useRef(0);
    const { activeQueueId, setActiveQueueId } = useQueue()

    const handleTrackSelect = async (selectedTrack: Track) => {
        const trackIndex = tracks.findIndex(track => track.url = selectedTrack.url);
        if (trackIndex === -1) return

        const isChangingQueue = id !== activeQueueId

        if (isChangingQueue) {
            const beforeTracks = tracks.slice(0, trackIndex)
            const afterTracks = tracks.slice(trackIndex + 1)

            await TrackPlayer.reset()

            await TrackPlayer.add(selectedTrack)
            await TrackPlayer.add(afterTracks)
            await TrackPlayer.add(beforeTracks)

            await TrackPlayer.play()

            queueOffSet.current = trackIndex
            setActiveQueueId(id)
        } else {
            const nextTrackIndex = trackIndex - queueOffSet.current < 0 ? tracks.length + trackIndex - queueOffSet.current : trackIndex - queueOffSet.current

            await TrackPlayer.skip(nextTrackIndex);

            TrackPlayer.play()
        }
    }

    return (
        <FlatList
            data={tracks}
            contentContainerStyle={{ paddingTop: 10, paddingBottom: 128 }}
            ItemSeparatorComponent={itemDivider}
            ListFooterComponent={itemDivider}
            ListEmptyComponent={
                <View>
                    <Text style={utilsStyles.emptyContentText} >No songs found...</Text>

                    <FastImage
                        source={{ uri: unknownTrackImageURI, priority: FastImage.priority.normal }}
                        style={utilsStyles.emptyContentImage}
                    />
                </View>
            }
            renderItem={
                ({ item }) => (
                    <TrackListItem track={item} onTrackSelect={handleTrackSelect} />
                )}
            {...flatlistProps}
        />
    );
}

export default TrackList;
