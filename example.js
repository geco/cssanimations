var myDiv = '<div style=\"z-index: 2147483647; position: fixed; top: 70vh; left: 10px; width: 250px; font-weight: bold; color: #71c3b7; font-size: 1.5rem; padding: 20px; text-align: center; background: #e1e8ed; border-radius: 100px;box-shadow: 0 11px 22px rgba(0,0,0,0.1);\">\n   <span id=\"spanid\" style=\"position: absolute; top: -10px; right: 10px; color: black; font-size: 20px; background: #e1e8ed; border-radius: 100%; cursor: pointer; width: 28px; line-height: 28px; text-align: center; box-shadow: 0 6px 12px rgba(0,0,0,0.05);\">×</span>\n   bouncefromleft !<br>\n   5€ discount 💰\n</div>';
var myDiv2 = '<div style=\"z-index: 2147483647; position: fixed; top: 10vh; left: 200px; width: 250px; font-weight: bold; color: #71c3b7; font-size: 1.5rem; padding: 20px; text-align: center; background: #e1e8ed; border-radius: 100px;box-shadow: 0 11px 22px rgba(0,0,0,0.1);\">\n   <span id=\"spanid\" style=\"position: absolute; top: -10px; right: 10px; color: black; font-size: 20px; background: #e1e8ed; border-radius: 100%; cursor: pointer; width: 28px; line-height: 28px; text-align: center; box-shadow: 0 6px 12px rgba(0,0,0,0.05);\">×</span>\n   bouncefromleft !<br>\n   5€ discount 💰\n</div>';
var myDiv3 = '<div style=\"z-index: 2147483647; position: fixed; top: 30vh; left: 500px; width: 250px; font-weight: bold; color: #71c3b7; font-size: 1.5rem; padding: 20px; text-align: center; background: #e1e8ed; border-radius: 100px;box-shadow: 0 11px 22px rgba(0,0,0,0.1);\">\n   <span id=\"spanid\" style=\"position: absolute; top: -10px; right: 10px; color: black; font-size: 20px; background: #e1e8ed; border-radius: 100%; cursor: pointer; width: 28px; line-height: 28px; text-align: center; box-shadow: 0 6px 12px rgba(0,0,0,0.05);\">×</span>\n   bouncefromleft !<br>\n   5€ discount 💰\n</div>';
var myDivHover = '<div style=\"z-index: 2147483647; position: fixed; top: 40vh; left: -200px; width: 250px; font-weight: bold; color: #71c3b7; font-size: 1.5rem; padding: 20px; text-align: center; background: #e1e8ed; border-radius: 100px;box-shadow: 0 11px 22px rgba(0,0,0,0.1);\">\n   <span id=\"brtanibtn\" style=\"position: absolute; top: -10px; right: 10px; color: black; font-size: 20px; background: #e1e8ed; border-radius: 100%; cursor: pointer; width: 28px; line-height: 28px; text-align: center; box-shadow: 0 6px 12px rgba(0,0,0,0.05);\">×</span>\n   hoverable !<br>\n   5€ discount 💰\n</div>';

setTimeout(() => {
  animate.show(myDiv, 'bouncefromleft');
}, 1000);

setTimeout(() => {
  animate.show(myDiv2, 'enterfromtop');
}, 2000);

setTimeout(() => {
  animate.show(myDiv3, 'bouncefromtop');
}, 3000);

setTimeout(() => {
  animate.show(myDivHover, 'hoverable');
}, 4000);
