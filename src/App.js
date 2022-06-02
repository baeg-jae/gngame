import { useState } from 'react';
import './App.css';
import Box from './component/Box';

//1. 박스 2개 (타이틀, 사진, 결과값)
//2. 가위바워보 버튼 있다.
//3. 버튼을 클릭하면 클릭한 값이 박스에 보임.
//4. 컴퓨터는 랜덤하게 아이템 선택이 된다.
//5. 3,4의 결과를 가지고 누가 이겼는지 승패를 따진다
//6. 테두리 칼라 승패 결과에 따라 색이 바뀐다. (이기면 초록, 지면 빨, 비기면 검)

const choice = {
    rock: {
        name: 'Rock',
        img: 'https://t1.daumcdn.net/cfile/blog/192A23474EBF5CD420',
    },
    scissors: {
        name: 'Scissors',
        img:
            'https://www.amway.co.kr/_ui/responsive/theme-blue/images/akl_product/home-livi' + 'ng/visual_top_5037.png',
    },
    paper: {
        name: 'Paper',
        img: 'https://www.collinsdictionary.com/images/full/paper_111691001.jpg',
    },
};
function App() {
    const [userSelect, setUserSelect] = useState(null);
    const [comSelect, setComSelect] = useState(null);
    const [result, setResult] = useState('');

    const play = (userChoice) => {
        setUserSelect(choice[userChoice]);
        let comChoice = randomChoice();
        setComSelect(comChoice);
        setResult(judgement(choice[userChoice], comChoice));
    };

    const judgement = (user, com) => {
        if (user.name == com.name) {
            return 'tie';
        } else if (user.name == 'Rock') return com.name == 'Scissors' ? 'win' : 'lose';
        else if (user.name == 'Scissors') return com.name == 'Paper' ? 'win' : 'lose';
        else if (user.name == 'Paper') return com.name == 'Rock' ? 'win' : 'lose';
    };

    const randomChoice = () => {
        let itemArray = Object.keys(choice); //객체에 키값만 뽑아서 어레이로 만들어주는 함수다.
        console.log('item array', itemArray);
        let randomItem = Math.floor(Math.random() * itemArray.length);
        let final = itemArray[randomItem];
        return choice[final];
    };

    //여기서 useChoice를 넣으면 react가 돌아가면서 여기 있는 함수를 실행시킨다
    return (
        <div>
            <div className="main">
                <Box title="You" item={userSelect} result={result} />
                <Box title="Com" item={comSelect} result={result} />
                {/* title 네임과 위에 설정한 네임을 동일시해야한다 오늘의 교훈!! :) */}
            </div>
            <div className="main">
                <button onClick={() => play('scissors')}>가위</button>
                <button onClick={() => play('rock')}>바위</button>
                <button onClick={() => play('paper')}>보</button>
            </div>
        </div>
    );
}

export default App;
