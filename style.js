import {StyleSheet} from 'react-native'

export default StyleSheet.create({

    container: {
        flex: 1,
    
      },
    
      header1: {
        flex: 1,
        backgroundColor: '#cc8009',
        alignItems: 'center',
        justifyContent: 'center',
      },
      header2: {
        flex: 1.3,
        backgroundColor: '#cc8009',
        paddingBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
      },
    
      body: {
        flex: 20,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        alignItems: 'stretch',
      },
    
      
      nav: {
        flex: 2,
        backgroundColor: '#cc8009',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection:'row',
    
      },
    
      text: {
        fontSize: 25,
      },
    
      section: {
        backgroundColor: '#ececec',
        paddingTop: 10,
        paddingBottom: 10,
        padding: 10,
        margin: 20,
        marginLeft: 20,
        marginRight: 20,

      },
    
      progbar: {
        fontSize: 12,
        color: 'green',
      },




    image: {
        height: '50%',
        width: '50%'
    },
    touchable: {
      alignItems: 'center',
      justifyContent: 'center'
    },
    // text: {
    //   color: colors.button,
    //   fontSize: 18,
    //   textAlign: 'center'
    // }
    
});
