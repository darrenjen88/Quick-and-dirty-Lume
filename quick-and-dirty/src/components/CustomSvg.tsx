import { ReactComponent as ShoeSvg } from "../assets/shoe.svg";
import { ReactComponent as SunglassSvg } from "../assets/sunglass.svg";
import { ReactComponent as BagSvg } from "../assets/bag.svg";
import { ReactComponent as WalletSvg } from "../assets/wallet.svg";
import { ReactComponent as FolderSvg } from "../assets/folder.svg";
import { ReactComponent as BackpackSvg } from "../assets/backpack.svg";
import { ReactComponent as TopSvg } from "../assets/top.svg";
import { ReactComponent as DisplaySvg } from "../assets/display.svg";
import { ReactComponent as TankSvg } from "../assets/tank.svg";
import { ReactComponent as BottomSvg } from "../assets/bottom.svg";
import { ReactComponent as WatchSvg } from "../assets/watch.svg";
import { ReactComponent as ClockSvg } from "../assets/clock.svg";
import { ReactComponent as SpraySvg } from "../assets/spray.svg";
import { ReactComponent as RulerSvg } from "../assets/ruler.svg";
import { ReactComponent as GlassSvg } from "../assets/glass.svg";
import { ReactComponent as Controller1Svg } from "../assets/controller1.svg";
import { ReactComponent as Controller2Svg } from "../assets/controller2.svg";
import { ReactComponent as Controller3Svg } from "../assets/controller3.svg";
import { ReactComponent as HelmetSvg } from "../assets/helmet.svg";
import { ReactComponent as BaseballSvg } from "../assets/baseball.svg";

interface CustomSvgType {
  name: String;
  type: String;
}

const CustomSvg = ({ name, type }: CustomSvgType) => {
  const svgStyle =
    type === "product"
      ? "w-20 h-20 my-4 hover:fill-stone-400 fill-stone-300 mx-auto"
      : "w-full h-full p-3 fill-black";
  let component = <ShoeSvg className={svgStyle} />;
  switch (name) {
    case "sunglass":
      component = <SunglassSvg className={svgStyle} />;
      break;
    case "bag":
      component = <BagSvg className={svgStyle} />;
      break;
    case "wallet":
      component = <WalletSvg className={svgStyle} />;
      break;
    case "folder":
      component = <FolderSvg className={svgStyle} />;
      break;
    case "backpack":
      component = <BackpackSvg className={svgStyle} />;
      break;
    case "top":
      component = <TopSvg className={svgStyle} />;
      break;
    case "display":
      component = <DisplaySvg className={svgStyle} />;
      break;
    case "tank":
      component = <TankSvg className={svgStyle} />;
      break;
    case "bottom":
      component = <BottomSvg className={svgStyle} />;
      break;
    case "watch":
      component = <WatchSvg className={svgStyle} />;
      break;
    case "clock":
      component = <ClockSvg className={svgStyle} />;
      break;
    case "spray":
      component = <SpraySvg className={svgStyle} />;
      break;
    case "ruler":
      component = <RulerSvg className={svgStyle} />;
      break;
    case "glass":
      component = <GlassSvg className={svgStyle} />;
      break;
    case "controller1":
      component = <Controller1Svg className={svgStyle} />;
      break;
    case "controller2":
      component = <Controller2Svg className={svgStyle} />;
      break;
    case "controller3":
      component = <Controller3Svg className={svgStyle} />;
      break;
    case "helmet":
      component = <HelmetSvg className={svgStyle} />;
      break;
    case "baseball":
      component = <BaseballSvg className={svgStyle} />;
      break;
  }
  return component;
};

export default CustomSvg;
