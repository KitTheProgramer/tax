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
} from "native-base";
import ModalSelector from "react-native-modal-selector";
import ActionButton from "react-native-action-button";


import styles from "./styles";
export interface Props {
  navigation: any;
  list: any;
}
export interface State {}


import SectionedMultiSelect from 'react-native-sectioned-multi-select';

// This is how you can load a local icon
// You can remove this if you'd like

const items = [
  {
    name: 'Fruits',
    id: 0,
    children: [
      {
        name: 'Apple',
        id: 10,
      },
      {
        name: 'Strawberry',
        id: 17,
      },
      {
        name: 'Pineapple',
        id: 13,
      },
      {
        name: 'Banana',
        id: 14,
      },
      {
        name: 'Watermelon',
        id: 15,
      },
      {
        name: 'Kiwi fruit',
        id: 16,
      },
    ],
  },
  {
    name: 'Gems',
    id: 1,
    icon: { uri: 'https://cdn4.iconfinder.com/data/icons/free-crystal-icons/512/Gemstone.png' }, // web uri
    children: [
      {
        name: 'Quartz',
        id: 20,
      },
      {
        name: 'Zircon',
        id: 21,
      },
      {
        name: 'Sapphire',
        id: 22,
      },
      {
        name: 'Topaz',
        id: 23,
      },
    ],
  },
  {
    name: 'Plants',
    id: 2,
    icon: 'filter_vintage', // material icons icon name
    children: [
      {
        name: "Mother In Law's Tongue",
        id: 30,
      },
      {
        name: 'Yucca',
        id: 31,
      },
      {
        name: 'Monsteria',
        id: 32,
      },
      {
        name: 'Palm',
        id: 33,
      },
    ],
  },
];


class ListOfMakets extends React.Component<Props, State> {
  onValueChange = (value: string) => {
    this.setState({
      selected: value
    });
  };
      state = {
      selected: "key1",
                  textInputValue: "",
                        selectedItems: [],

    }
  onSelectedItemsChange = (selectedItems) => {
    this.setState({ selectedItems });
  };
  render() {
            let index = 0;
        const data = [
            { key: index++, label: "Red Apples" },
            { key: index++, label: "Cherries" },
            { key: index++, label: "Cranberries" },
            { key: index++, label: "Pink Grapefruit" },
            { key: index++, label: "Raspberries" },
            { key: index++, label: "Beets" },
            { key: index++, label: "Red Peppers" },
            { key: index++, label: "Radishes" },
            { key: index++, label: "Radicchio" },
            { key: index++, label: "Red Onions" },
            { key: index++, label: "Red Potatoes" },
            { key: index++, label: "Rhubarb" },
            { key: index++, label: "Tomatoes" }
        ];
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent>
              <Icon
                active
                name="menu"
                onPress={() => this.props.navigation.navigate("DrawerOpen")}
              />
            </Button>
          </Left>
          <Body>
            <Title>Home</Title>
          </Body>
          <Right >
          <Button transparent>
              <Icon
                active
                name="setting"
                onPress={() => this.props.navigation.navigate("DrawerOpen")}
              />
            </Button>
          </Right>
        </Header>
        <Content>
        <Form>
          <Body>
              <View style={{width: 1000, height: 1000}}>
                        <SectionedMultiSelect
          items={items}
          uniqueKey="id"
          subKey="children"
          iconKey="icon"
          selectText="Choose some things..."
          showDropDowns={true}
          readOnlyHeadings={true}
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={this.state.selectedItems}
        />

                <ModalSelector
                    data={data}
                    initValue="Select something yummy!"
                    supportedOrientations={["landscape"]}
                    accessible={true}
                    scrollViewAccessibilityLabel={"Scrollable options"}
                    cancelButtonAccessibilityLabel={"Cancel Button"}
                    onChange={(option)=>{ this.setState({textInputValue:option.label});}} />

                <ModalSelector
                    data={data}
                    initValue="Select something yummy!"
                    supportedOrientations={["landscape"]}
                    accessible={true}
                    scrollViewAccessibilityLabel={"Scrollable options"}
                    cancelButtonAccessibilityLabel={"Cancel Button"}
                    onChange={(option)=>{ this.setState({textInputValue:option.label});}} />

                <ModalSelector
                    data={data}
                    initValue="Select something yummy!"
                    supportedOrientations={["landscape"]}
                    accessible={true}
                    scrollViewAccessibilityLabel={"Scrollable options"}
                    cancelButtonAccessibilityLabel={"Cancel Button"}
                    onChange={(option)=>{ this.setState({textInputValue:option.label});}} />
                </View>




            </Body>
          </Form>
        </Content>
        <Footer >
				<FooterTab>
            <Button vertical>
              <Icon name="settings" />
              <Text>Налаштування</Text>
            </Button>
            <Button vertical>
              <Icon name="grid" />
              <Text>Видалити</Text>
            </Button>
            <Button vertical active>
              <Icon active name="paper" />
              <Text>Зберегти</Text>
            </Button>
            <Button vertical>
              <Icon name="add" />
              <Text>Каталоги/Видiли</Text>
            </Button>
          </FooterTab>
					</Footer>
      </Container>
    );
  }
}

ListOfMakets.defaultProps = {
  list: ["First ittem", "second item"],
};

export default ListOfMakets;