'use strict';

const ReactNative = require('react-native');
const React = require('react');
const {View, Image} = ReactNative;

const Graphics = require('../graphics/index')

class App extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View
                styles={{
                    flex: 1,
                    height: '100%',
                    width: '100%',
                    backgroundColor: 'gray',
                    padding: 10,
                }}
            >
                <Image source={Graphics.about}
                    style={{
                        width: 100,
                        height: 100,
                        margin: 10,
                    }}
                    resizeMode={'contain'}
                />
                <Image source={Graphics.arrowDown}
                    style={{
                        width: 100,
                        height: 100,
                        margin: 10,
                    }}
                    resizeMode={'contain'}
                />
                <Image source={Graphics.arrowUp}
                    style={{
                        width: 100,
                        height: 100,
                        margin: 10,
                    }}
                    resizeMode={'contain'}
                />
                <Image source={Graphics.about}
                    style={{
                        width: 100,
                        height: 100,
                        margin: 10,
                    }}
                    resizeMode={'contain'}
                />
            </View>
        )
    }
}

module.exports = App
