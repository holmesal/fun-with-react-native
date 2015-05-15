/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ListView,
    MapView,
    TabBarIOS,
    NavigatorIOS
    } = React;
var Podcasts = require('./podcasts.ios.js');

var AwesomeProject = React.createClass({
    getInitialState: function () {
        return {
            selectedTab: 'podcasts'
        }
    },
    render: function() {
        return (
            <TabBarIOS style={styles.tabBar} selectedTab={this.state.selectedTab}>
                <TabBarIOS.Item
                    name="stream"
                    accessibilityLabel='Stream'
                    title='Stream'
                    icon={true}
                    selected={this.state.selectedTab === 'stream'}
                    onPress={() =>{
                        this.setState({
                            selectedTab: 'stream'
                        })
                    }}
                    >
                    <View style={styles.tabContent}>
                        <Text style={styles.textContent}>Stream content</Text>
                    </View>
                </TabBarIOS.Item>

                <TabBarIOS.Item
                    name="podcasts"
                    icon={true}
                    selected={this.state.selectedTab === 'podcasts'}
                    accessibilityLabel='Podcasts'
                    title='Podcasts'
                    onPress={() =>{
                        this.setState({
                            selectedTab: 'podcasts'
                        })
                    }}
                    >
                    <Podcasts />
                </TabBarIOS.Item>
            </TabBarIOS>
        )
    }
});

function _ix_DEPRECATED(imageUri) {
    return {
        uri: imageUri,
        isStatic: true,
    };
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    navBar: {
        flex: 1
    },
    tabBar: {
        flex: 1
    },
    tabContent: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 20,
        backgroundColor: 'white'
    },
    tabText: {
        color: 'white',
        backgroundColor: 'red'
    }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);