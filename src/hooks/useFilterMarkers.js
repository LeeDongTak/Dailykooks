function useFilterMarkers(markers, filter) {
  let filteredMarkers;
  const markersFilteredByVote = [
    {
      vote: 5,
      places: []
    },
    {
      vote: 4.5,
      places: []
    },
    {
      vote: 4,
      places: []
    },
    {
      vote: 3.5,
      places: []
    },
    {
      vote: 3,
      places: []
    },
    {
      vote: 2.5,
      places: []
    },
    {
      vote: 2,
      places: []
    },
    {
      vote: 1.5,
      places: []
    },
    {
      vote: 1,
      places: []
    }
  ];

  markers.forEach((marker) => {
    for (let i = 0; i < markersFilteredByVote.length; i++) {
      if (marker.vote <= markersFilteredByVote[i].vote && marker.vote >= markersFilteredByVote[i + 1].vote)
        markersFilteredByVote[i].places.push({ ...marker });
    }
  });

  switch (filter) {
    case '평점':
      filteredMarkers = markersFilteredByVote;
      break;
    case '가격대':
      break;
    case '지역':
      break;

    default:
      filteredMarkers = [...markers];
      break;
  }

  return { filteredMarkers };
}

export default useFilterMarkers;
