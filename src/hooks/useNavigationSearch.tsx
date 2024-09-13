import { colors } from "@/constants/tokens"
import { useNavigation } from "expo-router"
import { useLayoutEffect, useState } from "react"
import { SearchBarProps } from "react-native-screens"

const defaultSearchOptions: SearchBarProps = {
    tintColor: colors.primary,
    hideWhenScrolling: false
}

export const useNavigationSearch = ({ searchBarOptions }: { searchBarOptions?: SearchBarProps }) => {
    const [search, setSearch] = useState<string>('');

    const navigation = useNavigation()

    const handleOnChange: SearchBarProps['onChangeText'] = ({ nativeEvent: { text } }) => {
        setSearch(text);
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerSearchBarOptions: {
                ...defaultSearchOptions,
                ...searchBarOptions,
                onChangeText: handleOnChange
            }
        })
    }, [navigation, searchBarOptions])

    return search
}