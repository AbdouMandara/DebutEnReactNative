import { Text, View, StyleSheet, TextInput, Alert, Pressable } from "react-native";
import { useState } from "react";
export default function Index() {
  const nomEntier = (
    nom : String,
    prenom : String,
    age : Number,
  )=>{
    return `Je suis ${nom} ${prenom}, j 'ai ${age} ans`;
  }

  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [age, setAge] = useState(0);

  const afficheAlerte = () => {
    Alert.alert(nomEntier(nom, prenom, age));
  }
  const isDisabled = !nom || !prenom || age <= 0;
  return (
    <>
      <View style={styles.container}>
        <Text style={{fontSize: 30, textAlign: "center", marginBottom: 20}}>Bienvenue sur mon app</Text>
        <TextInput style={styles.textInput} placeholder="Nom" value={nom} onChangeText={setNom}/>
        <TextInput style={styles.textInput} placeholder="Prénom" value={prenom} onChangeText={setPrenom}/>
        <TextInput
          keyboardType="number-pad"
          style={styles.textInput}
          placeholder="Âge"
          onChangeText={(text) => setAge(parseInt(text))}
        />

        <Pressable 
          onPress={afficheAlerte}
          disabled={isDisabled}
          style={({ pressed }) => [
            styles.buttons,
            pressed && { backgroundColor: "#1e40af"},
            isDisabled && { opacity: 0.5, backgroundColor: "rgba(30, 64, 175, 0.5)"}
          ]}>
          <Text style={{fontSize:16, color: 'white'}}>Voir le résultat</Text>
        </Pressable>

            <Pressable
              style={{marginTop: 10, backgroundColor: "#d8871e", padding: 10, borderRadius: 6, alignItems: "center"}}
              onPress={() => {
                setNom("");
                setPrenom("");
                setAge(0);
              }}
            >
              <Text style={{fontSize:16, color: 'white'}}>Réinitialiser</Text>
            </Pressable>
   
      </View>
  </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, //Pour que ca prenne toute la largeur dispo du parent
    // alignItems: "start",
    justifyContent: "center",
    padding: 20,
  },
  textParagraph:{
    fontSize: 20, 
    marginBottom: 10
  },
  textInput :{
    borderRadius: 5,
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    width : "100%",
  },
  buttons :{
    width : "100%",
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    backgroundColor: "#2a5adf",
  }
});
