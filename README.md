# Spotify Playlist Generator
> A playlist generator built with React using the Spotify API.

## Application Overview
--------------------------
- Search artists.
- Live fetch and update search results from API.
- Click to select artist.
- Display selected artists, option to open in Spotify app.
- Generate a new random playlist based on selected artists top tracks.
--------------------------
### React Components
1. Spotify Search.
2. Selected Artists.
3. Playlist Generator.
--------------------------
### Algorithm Pseudo Code
1. Search for artists on input value change.
2. Display fetched results as suggested artists.
3. On artist click, add to selected artist list.
4. Add remove functionality to selected artists.
5. On playlist build button, generate playlist:
- Iterate through selected artists.
- Call on API to get top tracks for each.
- Dispatch action when all have been fetched.
- Add tracks id to the iFrame Spotify widget.

#### Disclosure
> Web app's focus was set on functionality rather than design.
