import React, {Component} from 'react';
import {
    Text,
    View,
    Button,
} from 'react-native';

class SecondPage extends Component {

    constructor(props) {
        super(props);
        let {title} = this.props.navigation.state.params;
        this.stata={
            title,
        };
    }

    render() {
        return (
            <View>
                <Text>
                    {this.stata.title}
                </Text>

                <Button
                    title="返回111"
                    onPress={() => this.props.navigation.goBack()}
                />
            </View>
        );
    }
}


export {SecondPage};
