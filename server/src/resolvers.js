const resolvers = {
    Query: {
        //returns an arra of the tracks for populating homepage grid
        tracksForHome: (_, __, {dataSources}) => {
            return dataSources.trackAPI.getTracksForHome();
        },
        track: (_, {id}, {dataSources}) => {
            // get track details
            return dataSources.trackAPI.getTrack(id);
        },
    },
    Track: {
        author: ({authorId}, _, {dataSources}) => {
            return dataSources.trackAPI.getAuthor(authorId)                
        },
        modules: ({id}, _, {dataSources}) => {
            return dataSources.trackAPI.getTrackModules(id)
        }
    }
};

module.exports = resolvers