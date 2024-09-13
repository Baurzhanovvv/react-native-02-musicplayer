import { unknownTrackImageURI } from '@/constants/images';
import { colors, fontSize } from '@/constants/tokens';
import { defaultStyles } from '@/styles';
import React from 'react';
import { TouchableHighlight, View, StyleSheet, Text } from 'react-native';
import FastImage from 'react-native-fast-image';

export type TrackListItemProps = {
    track: {
        title: string,
        image?: string,
        artist?: string
    }
}

const TrackListItem = ({ track }: TrackListItemProps) => {
    const isActiveTrack = false;

    return (
        <TouchableHighlight>
            <View style={styles.trackItemContainer}>
                <View>
                    <FastImage source={{
                        uri: track.image ?? unknownTrackImageURI,
                        priority: FastImage.priority.normal
                    }}
                        style={{
                            ...styles.trackArtworkImage,
                            opacity: isActiveTrack ? 0.6 : 1
                        }} />
                </View>

                <View style={{ width: '100%' }}>
                    <Text numberOfLines={1} style={{
                        ...styles.trackTitleText,
                        color: isActiveTrack ? colors.primary : colors.text
                    }}>
                        {track.title}
                    </Text>
                    {track.artist && (
                        <Text numberOfLines={1} style={styles.trackArtistText}>
                            {track.artist}
                        </Text>
                    )}
                </View>
            </View>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    trackArtworkImage: {
        borderRadius: 8,
        width: 50,
        height: 50
    },
    trackTitleText: {
        ...defaultStyles.text,
        fontSize: fontSize.sm,
        fontWeight: '600',
        maxWidth: '90%'
    },
    trackArtistText: {
        ...defaultStyles.text,
        fontSize: 14,
        color: colors.textMuted,
        marginTop: 4
    },
    trackItemContainer: {
        flexDirection: 'row',
        columnGap: 14,
        alignItems: 'center',
        paddingRight: 20
    }
})

export default TrackListItem;
