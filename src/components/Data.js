import React, { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import axios from 'axios';


const Data = () => {


const [coins, setcoins] = useState([]);

 useEffect(() => {


        axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false`)
            .then(res => {
                console.log(res);
                let a = res.data;
                console.log(a);
                setcoins(a);
})
            
    },)

    return (
        <>


            <div className="container-xxl py-5">
                <div className="container">

                    <h1 style={{ marginLeft: "35%" }}>Today's Cryptocurrency Prices</h1>

                    <Table>
                        <thead>
                            <tr>
                                <th>Rank</th>
                                <th>subName</th>
                                <th>Coin</th>
                                <th>Name</th>
                                <th>Symbol</th>
                                <th>Prices</th>
                                <th>Market Cap</th>
                                <th>Volume(24h)</th>
                                <th>High(24h)</th>
                                <th>Low(24h)</th>
                            </tr>

                            {coins.map((data,key)=>{
                                let i = key+1;
                                
                                return(
                            
                            <tr>
                                <td>{i}</td>
                                <td>{data.id}</td>
                                <td>{data.name}</td>
                                <td><img src={data.image} width={"30px"}/></td>
                                <td>{data.current_price}</td>
                                <td>{data.market_cap}</td>
                                <td>{data.total_volume}</td>
                                <td>{data.price_change_24h}</td>
                                <td>{data.high_24h}</td>
                                <td>{data.low_24h}</td>
                            </tr>
                                )
                        })
                        
                            }
                        </thead>
                    </Table>
                </div>
            </div>

        </>
    )
}

export default Data;