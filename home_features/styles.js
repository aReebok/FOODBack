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
        // padding: 10,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        alignItems: 'stretch',
      },
    
      
      nav: {
        flex: 0.2, 
        backgroundColor: '#cc8009',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection:'row',
    
      },
    
      text: {
        padding: 10,
        fontSize: 20,
        fontWeight: 'bold',
      },
    
      section: {
        backgroundColor: '#e6e6e6',
        paddingTop: 10,
        paddingBottom: 10,
        padding: 10,
        margin: 10,
        // marginLeft: 20,
        // marginRight: 20,

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

    /////// comment section

    comments: {
      padding: 10,
    },

    writeCommentWrapper: {
      position: 'absolute',
      bottom: 60,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    
    input:{
      paddingVertical:15,
      paddingHorizontal: 15,
      backgroundColor: '#e6e6e6',
      borderRadius: 60,
      borderColor: '#c0c0c0',
      borderWidth: 1,

      width: 300,
      
    },
    addWrapper: {
      width:50,
      height:50,
      backgroundColor: '#e6e6e6',
      borderRadius:50,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: '#c0c0c0',
      borderWidth: 1,
    },
    addText: {},
});
