import { Text, View, StyleSheet, ScrollView,Button, TextInput, Alert } from "react-native";
import { useState } from "react";
export default function Index() {
  const nomEntier = (
    nom : String,
    prenom : String,
    age : Number,
  )=>{
    return `${nom} ${prenom} j'ai ${age} ans`;
  }

  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [age, setAge] = useState(0);

  const afficheAlerte = () => {
    Alert.alert(nomEntier(nom, prenom, age));
  }
  return (
    <ScrollView style={{ padding: 20 }}>
      <View style={styles.container}>
        <TextInput style={styles.textInput} placeholder="Nom" value={nom} onChangeText={setNom}/>
        <TextInput style={styles.textInput} placeholder="Prénom" value={prenom} onChangeText={setPrenom}/>
        <TextInput style={styles.textInput} placeholder="Âge" value={age.toString()} onChangeText={(text) => setAge(parseInt(text) || 0)}/>
        {nom && prenom && age > 0 ? (
          <>
            <Text style={styles.textParagraph}>
              Je suis {nomEntier(nom, prenom, age)}!
            </Text>
            <Button title="Réinitialiser" onPress={() => { setNom(""); setPrenom(""); setAge(0); }} />
          </>
        ) : null}
        <Button title="Voir le resultat" onPress={afficheAlerte} style={styles.buttons} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, //Pour que ca prenne toute la largeur dispo du parent
    alignItems: "center",
    justifyContent: "center",
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
  }
});
