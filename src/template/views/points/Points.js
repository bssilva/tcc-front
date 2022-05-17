import { PointsModelTable } from "./_models/PointsModelTable";
import Points from "../../componets/points/Points.vue";
export default {
  components: { Points },
  data: () => ({
    PointsModelTable,
    loading: false,
    dataPoints: {}
  }),
  async created(){
    this.loading = true;
    this.dataPoints = await this.API.points.getPoints();
    if(this.dataPoints.length > 0){
      this.dataPoints.forEach(element => {
        element.createdDate = new Date (element.createdDate).toLocaleDateString('pt-br')
      })
    }
    this.loading = false;
  }
};
