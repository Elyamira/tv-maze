class TvBlandRouteServices {
    static getRouteForHomepage(){
        return`/`
    }
    static getRouteForShowById(showId:number){
        return`/show/${showId}`
    }
}
export default TvBlandRouteServices;