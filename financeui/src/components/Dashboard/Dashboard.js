import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/layout";
import DisplayChart from "../Chart/chart";

function Dashboard() {
    return (
        <DashoardStyled>
            <InnerLayout>
                <h1>All Transactions</h1>
                <div class="stats-con">
                    <div class="chart-con">
                        <DisplayChart />
                    </div>  
                </div>
            </InnerLayout>
        </DashoardStyled>
    )
}

const DashoardStyled = styled.div`


`

export default Dashboard