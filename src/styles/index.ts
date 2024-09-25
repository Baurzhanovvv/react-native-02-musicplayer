import { fontSize } from "@/constants/tokens";
import { StyleSheet } from "react-native";
import { colors } from './../constants/tokens';

export const defaultStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    text: {
        fontSize: fontSize.base,
        color: colors.text
    }
})

export const utilsStyles = StyleSheet.create({
    slider: {
        height: 7,
        borderRadius: 16
    },
    centeredRow: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    itemSeparator: {
        borderColor: colors.textMuted,
        borderWidth: StyleSheet.hairlineWidth,
        opacity: .3,
    },
    emptyContentText: {
        ...defaultStyles.container,
        color: colors.textMuted,
        textAlign: 'center',
        marginTop: 10
    },
    emptyContentImage: {
        width: 200,
        height: 200,
        alignSelf: 'center',
        marginTop: 40,
        opacity: 0.3,
    }
})
