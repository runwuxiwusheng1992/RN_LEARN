import React, {Component} from 'react';
import {
    Text,
    View,
    Button,
    TextInput,
    StyleSheet
} from 'react-native';

import {CallNet} from '../utils/NetUtils';


class MainPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            movies: null,
        };
    }

    render() {
        let {movies} = this.state;
        return (
            <View style={styles.style_bgView}>
                <TextInput
                    style={styles.style_user_phone}
                    placeholder={'手机号'}
                    numberOfLines={1}
                />
                <TextInput
                    style={styles.style_user_phone}
                    placeholder={'密码'}
                    numberOfLines={1}
                />
                <View style={styles.style_findPassAndRegister_Bgview}>
                    <Button
                        style={styles.style_findPassBtn}
                        title="找回密码"
                        onPress={() => this.props.navigation.navigate('Second', {title: '来自主页面'})}
                    />
                    <Button
                        style={styles.style_registerBtn}
                        title="注册"
                        onPress={() => this.props.navigation.navigate('Second', {title: '来自主页面'})}
                    />
                </View>

                {movies ? <View>
                    <Text>{movies.movies[0].title}</Text>
                    <Text>{movies.movies[0].releaseYear}</Text>
                </View> : null}
            </View>
        );
    }

    loadData() {

        CallNet({
            method: "GET",
            host: "https://facebook.github.io/react-native/",
            action: "movies.json",
            success: data => {
                console.log(data);
                this.setState({movies: data});

            }
        });
    }

}

const  styles = StyleSheet.create(
    {
        style_bgView:{
            alignItems:"center",
        },
        style_user_phone:{
            backgroundColor:'#fff',
            marginTop:50,
            height:50,
            width:300,
        },
        style_findPassAndRegister_Bgview:{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop:50,
            width:300,
            height:50,
           // backgroundColor:'#fff',
        },
        style_findPassBtn:{
            width:100,
            height:50,
        },
        style_registerBtn:{
            width:100,
            height:50,
        }
    }
)

export {MainPage};


