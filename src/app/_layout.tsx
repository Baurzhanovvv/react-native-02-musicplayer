import { useLogTrackPlayerState } from '@/hooks/useSetupTrackPlayer';
import { useSetupTrackPlayer } from '@/hooks/useTrackPlayer'
import { SplashScreen, Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { useCallback } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context'


SplashScreen.preventAutoHideAsync();


const App = () => {
	const handleTrackPlayerLoaded = useCallback(() => {
		SplashScreen.hideAsync()
	}, [])

	useSetupTrackPlayer({
		onLoad: handleTrackPlayerLoaded,
	})

	useLogTrackPlayerState()

	return (
		<SafeAreaProvider>
			<RootNavigation />

			<StatusBar style="dark" />
		</SafeAreaProvider>
	)
}

const RootNavigation = () => {
	return (
		<Stack>
			<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
		</Stack>
	)
}

export default App