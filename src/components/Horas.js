import React from 'react';
import { StyleSheet, View, } from 'react-native';
import DatePicker from 'react-native-datepicker';

class Horas extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {

        return (
            <View style={styles.Container}>
                <DatePicker
                    style={{ width: 200 }}
                    date={this.props.date}
                    mode="time"
                    // androidMode={"spinner"}
                    is24Hour={true}
                    placeholder="Selecione a hora"
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
                        this.props.atualizarHoras(date)
                    }}
                />
            </View>
        );
    }
}
export default Horas;
const styles = StyleSheet.create({
    Container: {
        justifyContent: 'center',
        flex: 1,
    },

});
