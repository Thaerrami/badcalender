import logo from './logo.svg';
import './App.css';
// import moment from moment;
import moment from 'moment'

const moonLanding = 
moment(
  Date(),
   "DD-MM-YYYY"
   ).add(5, 'days');
// moonLanding;

function App() {
  const check=(id,arr)=>{
    arr[id-1]={...arr[id-1],checked:!arr[id-1].checked}
    localStorage.setItem('calendar',JSON.stringify({...arr}))
    window.location.reload()
  }
  var d = new Date();
  var arr ={}
  const maindate= '05/28/2021'
  for (var i =1; i<=40;i++){
    new Date()
    arr[i]={"id":i,"checked":false,"date":moment(maindate).add(i,'days').format('L')}
    // arr.push({i:i,checked:false,date:moment(maindate).add(i,'days').format('L')})
  }


  if(!localStorage.getItem('calendar')){
    localStorage.setItem('calendar',JSON.stringify(arr))
  }

// console.log({...arr})
// const obj=localStorage.getItem('calendar')
  console.log(JSON.parse(localStorage.getItem('calendar')))


  var basedata=JSON.parse(localStorage.getItem('calendar'))

  new Date()
  return (
    <div className="App">
      <div class="grid-container">
       {Object.values(basedata).map(ele=><div id={ele.id}  className={`date-block grid-item ${ele.checked?'success':''}`}  onClick={()=>{check(ele.id,Object.values(basedata))}}>
                 {ele.checked?<span className='checked'></span>:''}
                 <p style={{padding:'20px'}}>
                    {ele.date}
                   </p>
               {/* <input type ='checkbox' className='' name={ele} /> */}
               </div>
               )}
        
      </div>
    </div>
  );
}

export default App;


// basedata