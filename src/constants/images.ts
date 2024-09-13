import unknownArtistImage from '@/assets/unknown_artist.png';
import unknownTrackImage from '@/assets/unknown_track.png';
import { Image } from 'react-native';


export const unknownArtistImageURI = Image.resolveAssetSource(unknownArtistImage).uri;
export const unknownTrackImageURI = Image.resolveAssetSource(unknownTrackImage).uri;
