try{//nvm
  //get script from multi-lib2
  const multiLib=require("multi-lib2/wrapper");
  //you can use GenericSmelter instead GenericCrafter
                                          // ▼this has to be same with .json file name
  const multi2=multiLib.extend(GenericCrafter,"neontizer",/*Array [] not {} ->*/[
    /*default form for each recipes. You can change values.
    {
      input:{
        items:[],     Modded Item:  "mod-name-item-name/amount", Vanilla Item: "item-name/amount"
        liquids:[],   Modded Liquid:  "mod-name-liquid-name/amount",  Vanilla liquid: "liquid-name/amount"
        power:0,
      },
      output:{
        items:[],
        liquids:[],
        power:0,
      },
      craftTime:80,
    },*/
    {//1
      input:{
        items:["neon-evolution-neon/1","copper/1"],
      },
      output:{
        items:["neon-evolution-neon-copper/1"]
      },
      craftTime:30
    },
    {//2
      input:{
        items:["pyratite/1","blast-compound/1"],
      },
      output:{
        items:["scrap/1","plastanium/2","spore-pod/2"],
      },
      craftTime:72
    },
    {//3
      input:{
        items:["sand/1"],
        power:15
      },
      output:{
        items:["silicon/1"],
        power:10
      },
      craftTime:30
    }
  ],{
    /*you can customize block here. ex)draw()
    you can use customUpdate(tile). this function excuted before update(tile)
    Modifying methods in library.js is not recommanded.
    */
  },{
    /*you can customize entity here.
    ex)
    _myProp:0,
    getMyProp(){
      return this._myProp;
    },
    setMyProp(a){
      this._myProp=a;
    }*/
  });
  /*
  YOU MUST NOT MODIFY VALUE OF THESE
  configurable
  outputsPower
  hasItems
  hasLiquids
  hasPower
  */
  //using example without .json file. I don't recommand this because you can't use mod item as requirements.
  
  /*true: dump items and liquids of output according to button
  false: dump items and liquids of output unconditionally*/
 



}
catch(err){

}
