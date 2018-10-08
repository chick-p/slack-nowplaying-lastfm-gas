var scriptProperties = PropertiesService.getScriptProperties();

var LASTFM_USER_ID = scriptProperties.getProperty('LASTFM_USER_ID');
var LASTFM_APY_KEY = scriptProperties.getProperty('YOUR_LASTFM_APY_KEY');

var SLACK_USER_ID = scriptProperties.getProperty('YOUR_SLACK_USER_ID');
var SLACK_API_TOKEN = scriptProperties.getProperty('YOUR_SLACK_API_TOKEN');
var SLACK_EMOJI = scriptProperties.getProperty(':musical_note:');
var SLACK_EMOJI_NOT_PLAYING = scriptProperties.getProperty(':slightly_smiling_face:') || SLACK_EMOJI

/**
* Update Slack profile by now playing song.
*/
function updateSlackProfile(){
  var nowplaying = getNowPlayingTrack_();
  var profile = createProfile_(nowplaying);
  var encodedProfile = encodeURIComponent(JSON.stringify(profile));
  var url = 'https://slack.com/api/users.profile.set?token=' + SLACK_API_TOKEN + '&user='+ SLACK_USER_ID +'&profile=' + encodedProfile
  UrlFetchApp.fetch(url);
}

/**
* Create Slack profile based on nowplaying.
* @param {Object} nowplaying - nowplaying track
* @return {Object} Slack profile
*/
function createProfile_(nowplaying){
  var profile = {
    status_emoji : SLACK_EMOJI
  };
  if(nowplaying){
    var title = nowplaying.song + ' - ' + nowplaying.artist;
    profile.status_text = title; 
  } else {
    profile.status_emoji = SLACK_EMOJI_NOT_PLAYING;
    profile.status_text = '';
  }
  return profile
}

/**
* Get nowplaying track from last.fm
* @return {Object} nowplaying track
*/
function getNowPlayingTrack_(){
  var tracks = fetchLatestTracks_();
  if(!tracks || tracks.length == 0){
    return;
  }
  var track = tracks[0];
  if(!track['@attr']){
    return;
  }
  var nowplaying = track["@attr"].nowplaying;
  if(!nowplaying){
    return;
  }
  
  var nowplaying = {
    artist: track.artist["#text"],
    song: track.name
  };
  return nowplaying;
}


/**
* Fetch played least tracks from last.fm
* @return {Array} recent tracks
*/
function fetchLatestTracks_(){
  var url = 'http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=' + LASTFM_USER_ID + '&api_key=' + LASTFM_APY_KEY + '&format=json';
  var response = UrlFetchApp.fetch(url);
  if (response.getResponseCode() != 200) {
    return;
  }
  var json = JSON.parse(response.getContentText());
  return json['recenttracks']['track'];
}
