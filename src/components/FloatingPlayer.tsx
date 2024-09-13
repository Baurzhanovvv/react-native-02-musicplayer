import { unknownTrackImageURI } from '@/constants/images'
import { defaultStyles } from '@/styles'
import { StyleSheet, Text, TouchableOpacity, View, ViewProps } from 'react-native'
import FastImage from 'react-native-fast-image'
import { useActiveTrack, Track } from 'react-native-track-player'
import { PlayPauseButton, SkipToNextButton } from './PlayerControls'
import { useLastActiveTrack } from '@/hooks/useLastActiveTrack'
import { MovingText } from './MovingText'

export const FloatingPlayer = ({ style }: ViewProps) => {
    const activeTrack = useActiveTrack()
    const lastActiveTrack = useLastActiveTrack();
    
    const displayedTrack = activeTrack ?? lastActiveTrack

    if (!displayedTrack) return null


    return (
        <TouchableOpacity activeOpacity={0.9} style={[
            styles.container, style
        ]}>
            <>
                <FastImage source={{
                    uri: displayedTrack.artwork ?? unknownTrackImageURI
                }}
                    style={styles.trackArtworkImage}
                />
                <View style={styles.trackTitleContainer}>
                    <MovingText animationThreshold={25} text={displayedTrack.title ?? ''} style={styles.trackTitle} />
                        
                </View>
                <View style={styles.trackOnControlContainer}>
                    <PlayPauseButton iconSize={24} />
                    <SkipToNextButton iconSize={22} />
                </View>
            </>
        </TouchableOpacity>
    )

}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#252525',
        padding: 8,
        borderRadius: 12,
        paddingVertical: 10,
        marginBottom: 10
    },
    trackArtworkImage: {
        width: 40,
        height: 40,
        borderRadius: 8
    },
    trackTitle: {
        ...defaultStyles.text,
        fontSize: 18,
        fontWeight: '600',
        paddingLeft: 10
    },
    trackTitleContainer: {
        flex: 1,
        overflow: 'hidden',
        marginLeft: 10
    },
    trackOnControlContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 20,
        marginRight: 16,
        paddingLeft: 16
    }
})