import { colors } from '@/constants/tokens';
import { useTrackPlayerRepeatMode } from '@/hooks/useTrackPlayerRepeatMode';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ComponentProps } from 'react';
import { StyleSheet } from 'react-native';
import { RepeatMode } from 'react-native-track-player';
import { match } from 'ts-pattern';


type IconProps = Omit<ComponentProps<typeof MaterialCommunityIcons>, 'name'>
type IconName = ComponentProps<typeof MaterialCommunityIcons>['name']

const repeatOrder = [
    RepeatMode.Off,
    RepeatMode.Track,
    RepeatMode.Queue
] as const

const PlayerRepeatToggle = ({ ...iconProps }: IconProps) => {
    const { repeatMode, changeRepeatMode } = useTrackPlayerRepeatMode();

    const toggleRepeatMode = () => {
        if (repeatMode == null) return

        const currentIndex = repeatOrder.indexOf(repeatMode)
        const nextIndex = (currentIndex + 1) % repeatOrder.length

        changeRepeatMode(nextIndex)
    }

    const icon = match(repeatMode)
        .returnType<IconName>()
        .with(RepeatMode.Off, () => "repeat-off")
        .with(RepeatMode.Track, () => "repeat-once")
        .with(RepeatMode.Queue, () => "repeat")
        .otherwise(() => "repeat-off")


    return <MaterialCommunityIcons name={icon} onPress={toggleRepeatMode} color={colors.icon} {...iconProps} />
}

const styles = StyleSheet.create({})

export default PlayerRepeatToggle;
