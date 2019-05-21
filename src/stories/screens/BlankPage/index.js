import * as React from "react";
import {
    Picker,
    Container,
    Header,
    Title,
    Content,
    Text,
    Button,
    Icon,
    Left,
    Right,
    Body,
    Footer,
    Spinner,
    ScrollableTab,
    Form,
    Item,
    Label,
    Input,
    Tab,
    Tabs,
    View,
    FooterTab
} from "native-base";
import ModalSelector from "react-native-modal-selector";
import styles from "./styles";
import {StyleSheet} from "react-native";


class BlankPage extends React.Component {

    constructor(props) {
        super();
        this.state = {
            MForm: props.MForm,
            lantCatId: 3,
            maquette: "M01",
            maqByCategory: props.maket_availability.filter(item => item.kakz == 3 && (item.available == 1 || item.available == 2))
        };
    }

    renderMainTabs = () => {
        return (
            <Tabs style={{flex: 0.2}}>
                <Tab heading="1">
                    <Tabs
                        renderTabBar={() => <ScrollableTab/>}
                        onChangeTab={(obj) => obj.i !== obj.from ? this.props.changeForm(obj.ref.props.heading) : true}
                    >
                        {this.state.maqByCategory.map((it) => this.renderMaqTabs(it.tabl))}
                    </Tabs>
                </Tab>
            </Tabs>
        );
    };
//<this.state.MForm maquette={this.state.maquette}  stateIn={"Поточний"} changeLandCategory = {(id) =>{console.log(id, "set category"); this.setState({lantCatId: id});}}/>

    renderMaqTabs = (num) => {
        let maqName = "";
        if (String(num).length == 1) {
            maqName = "M0" + num;
        } else {
            maqName = "M" + num;
        }

        return (
            <Tab heading={maqName}>
                <Tabs>
                    <Tab heading="Поточний"/>
                    <Tab heading="Попередн."/>
                </Tabs>
            </Tab>
        );
    };

// 	<this.state.MForm maquette={this.state.maquette}  stateIn={"Поточний"} changeLandCategory = {(id) =>{console.log(id, "set category"); this.setState({lantCatId: id});}}/>

    render() {
        let MForm = this.props;
        const param = this.props.navigation.state.params;
        console.log(this.state, this.props, "from render blank");
        return (
            <Container style={[styles.container, {flex: 1}]}>
                <Header hasTabs>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name="ios-arrow-back"/>
                        </Button>
                    </Left>

                    <Body style={{flex: 3}}>
                    <Title>{"Лiсництво 1, квартал 1, видiл 1, Поточний"}</Title>
                    </Body>

                    <Right/>
                </Header>
                <Content>
                    {this.renderMainTabs()}
                    <this.state.MForm />
                </Content>

                <Footer>
                    <FooterTab>
                        <Button vertical>
                            <Icon name="settings"/>
                            <Text>Налаштування</Text>
                        </Button>
                        <Button vertical>
                            <Icon name="grid"/>
                            <Text>Видалити</Text>
                        </Button>
                        <Button vertical active>
                            <Icon active name="paper"/>
                            <Text>Зберегти</Text>
                        </Button>
                        <Button vertical onPress={() => this.props.navigation.navigate("SelectDepartmentsAndMaquette")}>
                            <Icon name="add"/>
                            <Text>Макети/Видiли</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}

export default BlankPage;
