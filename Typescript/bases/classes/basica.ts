(()=>{

    class Avenger {
    //   private name:string;
    //   public team:string;
    //   public realName?:string;
      static avAge:number;

      constructor(
        private name:string,
        public team:string,
        public realName?:string) {
      }
    }

    const antMan:Avenger = new Avenger('Antman','capitan');
    console.log(antMan)

})()