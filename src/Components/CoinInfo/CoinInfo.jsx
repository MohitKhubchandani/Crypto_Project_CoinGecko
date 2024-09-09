import Alert from "../Alert/Alert";
import {Line} from 'react-chartjs-2';
import { CategoryScale } from 'chart.js'
import Chart from 'chart.js/auto';
import { chartDays } from "../../helpers/constants";

Chart.register(CategoryScale)

function CoinInfo({historicData, setDays, setCoinInterval, days, Currency}){

    
    function handleDayChange(event) {
        const daysSelected = event.target.options[event.target.selectedIndex].value;
        if (daysSelected === "1") {
            setCoinInterval?.('');
        } else {
            setCoinInterval?.('daily');
        }
        setDays?.(daysSelected);
    }
    
    

    if(!historicData){
     <Alert message='No Data Available' type='info'/>
    };

    return (
        <div className="flex flex-col items-center justify-center mt-6 p-6 w-full md:w-3/4">
            
            <div className="w-full h-[400px]">
            <Line 
              data={{
                labels: historicData.prices.map(coinPrice => {
                    let date =  new Date(coinPrice[0]);
                    let time = date.getHours() > 12 ? `${date.getHours() - 12}:${date.getMinutes()} PM`: `${date.getHours()}:${date.getMinutes()} AM`
                    return days === 1 ? time :date.toLocaleDateString();
                }), 
                datasets: [
                    {
                        data: historicData.prices.map(coinPrice => coinPrice[1]),
                        label: `Price (past ${days} ${days === 1 ? 'Day' : 'Days'}) in ${Currency.toUpperCase()}`
                    }
            ],
            }}
            options={{
                responsive : true,
                maintainAspectRatio: false,
                elements: {
                    point:{
                        radius: 0
                        
                    }
                }
            }}
            />

            </div>
          

            <div className="flex justify-center p-6 w-full">
            <select className="select select-info w-full max-w-xs" onChange={handleDayChange}>
            {chartDays.map((day, index) => {
                    return (
                         <option  selected={days == day.value} key={index} value={day.value}>{day.label}</option>
                    )
                })}
            </select>    
            
            </div>

        </div>
    )
};

export default CoinInfo;