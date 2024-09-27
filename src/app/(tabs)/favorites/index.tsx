
import TrackList from '@/components/TrackList';
import { screenPadding } from '@/constants/tokens';
import { trackTitleFilter } from '@/helpers/filter';
import { generateTracksListId } from '@/helpers/miscellaneous';
import { useNavigationSearch } from '@/hooks/useNavigationSearch';
import { useFavorites } from '@/store/library';
import { defaultStyles } from '@/styles';
import { useMemo } from 'react';
import { ScrollView, View } from 'react-native';


const FavoritesScreen = () => {
	const search = useNavigationSearch({
		searchBarOptions: {
			placeholder: "Find in songs",
			textColor: "#fff"
		}
	})

	const favoritesTracks = useFavorites().favorites

	const filteredFavoritesTracks = useMemo(() => {
		if (!search) return favoritesTracks
		return favoritesTracks.filter(trackTitleFilter(search))
	}, [search, favoritesTracks])

	return (
		<View style={defaultStyles.container}>
			<ScrollView style={{ paddingHorizontal: screenPadding.horizontal }} contentInsetAdjustmentBehavior='automatic'>
				<TrackList id={generateTracksListId('songs', search)} scrollEnabled={false} tracks={filteredFavoritesTracks} />
			</ScrollView>
		</View>
	)
}

export default FavoritesScreen;