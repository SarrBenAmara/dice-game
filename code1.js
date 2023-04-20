gdjs.Untitled_32scene2Code = {};
gdjs.Untitled_32scene2Code.GDNewSpriteObjects1= [];
gdjs.Untitled_32scene2Code.GDNewSpriteObjects2= [];
gdjs.Untitled_32scene2Code.GDstartObjects1= [];
gdjs.Untitled_32scene2Code.GDstartObjects2= [];
gdjs.Untitled_32scene2Code.GDNewSprite2Objects1= [];
gdjs.Untitled_32scene2Code.GDNewSprite2Objects2= [];
gdjs.Untitled_32scene2Code.GDNewSprite3Objects1= [];
gdjs.Untitled_32scene2Code.GDNewSprite3Objects2= [];

gdjs.Untitled_32scene2Code.conditionTrue_0 = {val:false};
gdjs.Untitled_32scene2Code.condition0IsTrue_0 = {val:false};
gdjs.Untitled_32scene2Code.condition1IsTrue_0 = {val:false};


gdjs.Untitled_32scene2Code.mapOfGDgdjs_46Untitled_9532scene2Code_46GDstartObjects1Objects = Hashtable.newFrom({"start": gdjs.Untitled_32scene2Code.GDstartObjects1});
gdjs.Untitled_32scene2Code.eventsList0 = function(runtimeScene) {

{


gdjs.Untitled_32scene2Code.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32scene2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.Untitled_32scene2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene", false);
}}

}


};gdjs.Untitled_32scene2Code.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("start"), gdjs.Untitled_32scene2Code.GDstartObjects1);

gdjs.Untitled_32scene2Code.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32scene2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Untitled_32scene2Code.mapOfGDgdjs_46Untitled_9532scene2Code_46GDstartObjects1Objects, runtimeScene, true, false);
}if (gdjs.Untitled_32scene2Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Untitled_32scene2Code.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.Untitled_32scene2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32scene2Code.GDNewSpriteObjects1.length = 0;
gdjs.Untitled_32scene2Code.GDNewSpriteObjects2.length = 0;
gdjs.Untitled_32scene2Code.GDstartObjects1.length = 0;
gdjs.Untitled_32scene2Code.GDstartObjects2.length = 0;
gdjs.Untitled_32scene2Code.GDNewSprite2Objects1.length = 0;
gdjs.Untitled_32scene2Code.GDNewSprite2Objects2.length = 0;
gdjs.Untitled_32scene2Code.GDNewSprite3Objects1.length = 0;
gdjs.Untitled_32scene2Code.GDNewSprite3Objects2.length = 0;

gdjs.Untitled_32scene2Code.eventsList1(runtimeScene);

return;

}

gdjs['Untitled_32scene2Code'] = gdjs.Untitled_32scene2Code;
