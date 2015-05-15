/**
 * Created by alonso on 3/29/15.
 */
var React = require('react-native');
var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ListView,
    NavigatorIOS,
    TextInput
    } = React;

var Podcasts = React.createClass({
    handleAddButtonPress: function() {
        this.refs.nav.push({
            title: 'Add a podcast',
            component: AddPodcast
        });
    },
    render: function() {
        return (
            <NavigatorIOS
                ref='nav'
                tintColor='#FF6600'
                style={styles.container}
                initialRoute={{
                    title: 'Alonsoooo',
                    component: PodcastList,
                    rightButtonTitle: 'Add',
                    onRightButtonPress: this.handleAddButtonPress
                }
                }/>
        )
    }
});

var PodcastList = React.createClass({
    render: function() {
        return (
            <View style={styles.content}>
                <Text>podcast list goes here</Text>
            </View>
        )
    }
});

var AddPodcast = React.createClass({
    render: function() {
        return (
            <View style={styles.addPodcast}>
                <TextInput
                    style={styles.textInput}
                    onChangeText={(text) => this.setState({input: text})}
                    autoFocus={true}
                    placeholder='Podcast name'
                />
            </View>
        )
    }
});

module.exports = Podcasts;

var styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 60
    },
    textContent: {
        color: 'black',
        flex: 1,
        paddingTop: 200
    },
    addPodcast: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingTop: 64
    },
    textInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1
    }
});
