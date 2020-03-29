import React from 'react';
import { View, StyleSheet } from 'react-native';
import DatePicker from 'react-native-datepicker';

class Data extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}

    }

    // dataAtualizada = (data) => {
    //     this.setState({ date: data });
    // }

    render() {

        return (
            <View style={styles.Container}>
                <DatePicker
                    style={{ width: 200 }}
                    date={this.props.date}
                    mode="date"
                    placeholder="Selecione a data"
                    format="DD-MM-YYYY"
                    minDate="01-01-2020"
                    // androidMode={"spinner"}
                    // maxDate="31-12-2020"
                    confirmBtnText="Confirm" // IOS
                    cancelBtnText="Cancel" // IOS
                    iconSource={require('../images/icon/iconePicker.png')}
                    style={{ width: '100%' }}
                    customStyles={{
                        dateIcon: {
                            position: 'absolute',
                            right: 0,
                            height: 7,
                            width: 15,

                        },
                        dateInput: {
                            alignItems: "flex-start",
                            backgroundColor: '#FFF',
                            borderWidth: 0,
                            paddingTop: 1,
                        },
                    }}
                    onDateChange={(event, date)=>{
                        this.props.atualizarData(date)
                    }}
                  
                />
            </View>
        );
    }
}
export default Data;
const styles = StyleSheet.create({
    Container: {
        justifyContent: 'center',
        flex: 1,
    },

});