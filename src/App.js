import logo from './logo.svg';
import './App.css';
import Box from './component/Box'


//1. 박스 2개 (타이틀, 사진, 결과값)
//2. 가위바워보 버튼 있다.
//3. 버튼을 클릭하면 클릭한 값이 박스에 보임.
//4. 컴퓨터는 랜덤하게 아이템 선택이 된다.
//5. 3,4의 결과를 가지고 누가 이겼는지 승패를 따진다
//6. 테두리 칼라 승패 결과에 따라 색이 바뀐다. (이기면 초록, 지면 빨, 비기면 검)

const choice = {
  rock: {
    name: "Rock",
    img:"https://t1.daumcdn.net/cfile/blog/192A23474EBF5CD420"
  },
  scissors:{
    name: "Scissors",
    img: "https://www.amway.co.kr/_ui/responsive/theme-blue/images/akl_product/home-living/visual_top_5037.png"
  },
  paper: {
    name:"Paper",
    img:"https://www.collinsdictionary.com/images/full/paper_111691001.jpg"
  }

}
function App() {
  const play = (useChoice) => {
    console.log('선택됨',useChoice)
  } 
  return (
    <div>
      <div className='main'>
        <Box title="You"/>
        <Box title="Computer"/>
      </div>
      <div className='main'>
        <button onClick={play("scissors")}>가위</button>
        <button onClick={play("rock")}>바위</button>
        <button onClick={play("paper")}>보</button>
      </div>
    </div>
    
  );
}

export default App;
