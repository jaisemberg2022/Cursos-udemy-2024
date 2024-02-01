(()=>{

    class Avenger {
    //   private name:string;
    //   public team:string;
    //   public realName?:string;
      static avAge:number;
      static getAvAge(){
        return `${this.name}`
      }
      constructor(
        private name:string,
        public team:string,
        public realName?:string) {
      }

    }

    const antMan:Avenger = new Avenger('Antman','capitan');
    console.log(Avenger.getAvAge())

})()