import logo from './logo.svg';
import './App.css';
import { Accordian } from './Components/Accordian/User';
import Randomcolor from './Components/random colors';
import StarRating from './Components/star-rating';
import ImageSlider from './Components/image-slider';
import QRCode from 'react-qr-code';
import QRCodeGenerator from './Components/QR-Code-Generator';
import ModelTest from './Components/Custom-Model-Popup/modal-test';
import LightDarkMode from './Components/Light-Dark-Modes';
import MenuItem from './Components/tree-view/menu-item';
import menus from './Components/tree-view/data';
import Treeview from './Components/tree-view';
import ScrollIndicator from './Components/Scroll-indicator/scroll';
import LoadMoreButtons from './Components/Load-More-Buttons';
import TabTest from './Components/Custom-Tabs';
import GithubProfileFinder from './Components/Github-Profile-finder';
import SearchAutocomplete from './Components/search-autocomplete-with-API';
import TicTacToe from './Components/tic-tact-toe';
import UseFetchHookTest from './Components/Use-fetch/test';
import FeatureFlags from './Components/Feature-Flag';
import FeatureFlagGlobalState from './Components/Feature-Flag/Context';
import ScrolltoTopAndBottom from './Components/Scroll-to-top-and-bottom';
import ScrollToSection from './Components/scroll-to-particular-section/section';
import UseOnclickOutsideTest from './Components/use-onclick-outside/test';
import UseWindowResizeTest from './Components/use-window-resize/test';

function App() {
  return (
    <div className="App">
      {/* Project 1 */}
      {/* <Accordian/> */}

      {/* Project 2 */}
      {/* <Randomcolor/> */}

      {/* Project 3 */}
      {/* <StarRating/> */}

      {/* Project 4 */}
      {/* <ImageSlider url={'https://picsum.photos/v2/list'} limit={'10'} /> */}

      {/* Project 5 */}
      {/* <QRCodeGenerator/> */}

      {/* Project 6 */}
      {/* <LoadMoreButtons/> */}

      {/* Project 7 */}
      {/* <ModelTest/> */}

      {/* Projrct 8 */}
      {/* <LightDarkMode/> */}

      {/* project 9 */}
      {/* <Treeview menus={menus}/> */}

      {/* Project 10 */}
      {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"}/> */}
       
       {/* Project 11 */}
       {/* <TabTest/> */}

       {/* project 12 */}
       {/* <GithubProfileFinder/> */}

       {/* project 13 */}
       {/* <SearchAutocomplete/> */}

       {/* project 14 */}
       {/* <TicTacToe/> */}

       {/* project 15 */}
       {/* <UseFetchHookTest/> */}
    
    {/* Project 16 */}
    {/* <FeatureFlagGlobalState> */}
      {/* <FeatureFlags/> */}
    {/* </FeatureFlagGlobalState> */}

    {/* project 17 */}
    {/* { <ScrolltoTopAndBottom/> } */}

    {/* project 18 */}
    {/* <ScrollToSection/> */}

    {/* Project 19 */}
    {/* <UseOnclickOutsideTest/> */}

    {/* Project 20 */}
    {/* <UseWindowResizeTest/> */}
   
    </div>
  );
}

export default App;
