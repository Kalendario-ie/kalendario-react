import React, {ChangeEvent, useState} from 'react';
import {timeFromString, TimeOfDay, timeToISOString} from 'src/app/api/common/models';
import {KBaseInputProps} from 'src/app/shared/components/primitives/inputs/interfaces';
import {KFlexRow} from 'src/app/shared/molecules/flex';

interface KFormikDurationInputProps extends KBaseInputProps {
    value: string;
    name: string;
}

const KDurationInput: React.FunctionComponent<KFormikDurationInputProps> =
    ({
         value,
         name,
         className,
         onBlur,
         onChange,
         onKeyUp,
     }) => {
        const [timeOfDay, setTimeOfDay] = useState(timeFromString(value));

        const hourHandler = (e: ChangeEvent<HTMLInputElement>) => {
            handleChange(e, {hour: +e.target.value, minute: timeOfDay.minute});
        }

        const minuteHandler = (e: ChangeEvent<HTMLInputElement>) => {
            handleChange(e, {hour: timeOfDay.hour, minute: +e.target.value})
        }

        const handleChange = (e: ChangeEvent<HTMLInputElement>, newValue: TimeOfDay) => {
            setTimeOfDay(newValue);
            e.target = {...e.target};
            e.target.type = 'string';
            e.target.value = timeToISOString(newValue);
            onChange && onChange(e);
        }

        const style = {
            width: '30%'
        }

        return (
            <KFlexRow className={className} justify={'center'}>
                <span className="mx-2">hour(s)</span>
                <input
                    style={style}
                    className="input-no-border"
                    name={name}
                    onBlur={onBlur}
                    onChange={hourHandler}
                    type="number"
                    value={timeOfDay.hour}/>
                <span className="mx-2">min(s)</span>
                <input
                    style={style}
                    className="input-no-border"
                    name={name}
                    onBlur={onBlur}
                    onChange={minuteHandler}
                    type="number"
                    max={60}
                    value={timeOfDay.minute}/>
            </KFlexRow>
        )
    }


export default KDurationInput;
