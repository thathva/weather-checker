import React from 'react';
import {Sparklines, SparklinesLine} from 'react-sparklines';
import _ from 'lodash';

function average(data){
    return _.round(_.sum(data)/data.length);
}

export default (props) => {
    return (
        <div>
            <Sparklines 
                height={120}
                width={180}
                data={props.data}>
                <SparklinesLine color={props.color}/>
                </Sparklines>
                <div>
                    Average: {average(props.data)}{props.unit}
                </div>
        </div>
    )
}