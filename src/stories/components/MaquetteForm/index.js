import * as React from "react";
import {
    Container,
    Header,
    Title,
    Content,
    Text,
    Button,
    Icon,
    Left,
    Body,
    Right,
    List,
    ListItem,
    SwipeRow,
    View,
    Form,
    Picker,
    Label,
    Input,
    Footer,
    FooterTab,
    Item
} from "native-base";
import {StyleSheet} from "react-native";
// import SearchableDropdown from "react-native-searchable-dropdown";
import RNPicker from "rn-modal-picker";
import styles from "./styles";
import Accordion from '../../components/Acordion'


class MaquetteForm extends React.Component {
    selectedItem = (lable, RELATION, CODE, changeLandCategory) => {
        const {metadata} = this.props;
        const data = metadata[RELATION];
        if (!Array.isArray(data)) {
            return null;
        }


        const items = data.filter(it => it.NAME != null).map((it, idx) => ({
            name: it.NAME,
            id: idx
        }));

        return (
            <View>
                <Text style={{fontSize: 17, marginLeft: 5, marginTop: 5}}>{lable}</Text>
                <RNPicker
                    dataSource={items}
                    dummyDataSource={items}
                    defaultValue={false}
                    pickerTitle={lable}
                    showSearchBar={true}
                    disablePicker={false}
                    changeAnimation={"none"}
                    searchBarPlaceHolder={"Пошук"}
                    showPickerTitle={true}
                    pickerStyle={Styles.pickerStyle}
                    selectedLabel={this.state.selected2[CODE]}
                    placeHolderLabel={this.state.placeHolderText}
                    selectLabelTextStyle={Styles.selectLabelTextStyle}
                    placeHolderTextStyle={Styles.placeHolderTextStyle}
                    dropDownImageStyle={Styles.dropDownImageStyle}
                    selectedValue={(idx, value) => this.onValueChange2(idx, value, CODE)}
                />
            </View>
        );
    };

    inputItem = (item) => {
        const {NAME} = item;
        return (<Item key={NAME} style={{
                flexDirection: "column",
                alignItems: "flex-start",
                borderBottomWidth: 0,
                marginLeft: 0,
                borderColor: "#000",
                marginTop: 5
            }}>
                <Label style={{marginLeft: 5, marginBottom: 5, color: "#000"}}>{NAME}</Label>
                <Input style={{
                    width: "100%",
                    borderRadius: 8,
                    flex: 0,
                    borderColor: "#D9D5DC",
                    borderWidth: 2,
                    marginBottom: 5
                }} keyboardType="numeric"/>
            </Item>
        );
    };

    chooseInput = (item) => {
        const {changeLandCategory} = this.props;
        if (!item.RELATION) {
            return this.inputItem(item, item.CODE);
        } else {
            //   return this.inputItem(item);
            if (item.TABL === "M01" && item.CODE === "KAKZ") {
                return this.selectedItem(item.NAME, item.RELATION, item.CODE, changeLandCategory);
            }
            return this.selectedItem(item.NAME, item.RELATION, item.CODE);
        }
    };

    state = {
        selected2: {}
    };

    onValueChange2 = (idx, value, CODE) => {
        const {selected2} = this.state;
        selected2[CODE] = value;
        this.setState({
            selected2
        });
    };

    render() {

        return (
            <View>
                <Form>
                    {
                        this.props.metadata.struct.filter(item => item.TABL === this.props.maquetteName).filter(item => item.num).map(this.chooseInput)
                    }
                </Form>
                {(this.props.maquetteName === 'M10') ? <Accordion/> : null}
            </View>
        );
    }
}

MaquetteForm.defaultProps = {
    list: ["First ittem", "second item"],
};
const Styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },

    searchBarContainerStyle: {
        marginBottom: 10,
        flexDirection: "row",
        height: 40,
        shadowOpacity: 1.0,
        shadowRadius: 5,
        shadowOffset: {
            width: 1,
            height: 1
        },
        backgroundColor: "rgba(255,255,255,1)",
        shadowColor: "#d3d3d3",
        borderRadius: 10,
        elevation: 3,
        marginLeft: 10,
        marginRight: 10
    },

    selectLabelTextStyle: {
        color: "#000",
        textAlign: "left",
        width: "99%",
        padding: 10,
        flexDirection: "row"
    },
    placeHolderTextStyle: {
        color: "#D3D3D3",
        padding: 10,
        textAlign: "left",
        width: "99%",
        flexDirection: "row"
    },
    dropDownImageStyle: {
        marginLeft: 10,
        width: 10,
        height: 10,
        alignSelf: "center"
    },

    pickerStyle: {
        marginLeft: 18,
        elevation: 3,
        paddingRight: 25,
        marginRight: 10,
        marginBottom: 2,
        shadowOpacity: 1.0,
        shadowOffset: {
            width: 1,
            height: 1
        },
        borderWidth: 1,
        shadowRadius: 10,
        backgroundColor: "rgba(255,255,255,1)",
        shadowColor: "#d3d3d3",
        borderRadius: 5,
        flexDirection: "row"
    }
});

export default MaquetteForm;
