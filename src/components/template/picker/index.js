import DatePicker from 'react-native-datepicker';

const Picker = ({}) => (
  <DatePicker
    style={{width: 200}}
    date={date}
    mode="date"
    placeholder="select date"
    format="YYYY-MM-DD"
    minDate="2018-05-01"
    maxDate="2020-06-01"
    confirmBtnText="Confirm"
    cancelBtnText="Cancel"
    customStyles={{
      dateIcon: {
        position: 'absolute',
        left: 0,
        top: 4,
        marginLeft: 0
      },
      dateInput: {
        marginLeft: 36
      }
      // ... You can check the source to find the other keys.
    }}
    onDateChange={(date) => {this.setState({ task: { date } })}}
  />
)

export default Picker;
