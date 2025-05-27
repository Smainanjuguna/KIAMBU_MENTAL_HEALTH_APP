import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native'; // 🧠 Added Image

const doctors = [
  {
    id: '1',
    name: 'Dr. Grace Wanjiku',
    location: 'Thika Town',
    phone: '0712345678',
    clinic: 'Thika Wellness Clinic',
    image: require('./assets/dr1.png'),
  },
  {
    id: '2',
    name: 'Dr. Kevin Muriuki',
    location: 'Ruiru',
    phone: '0798765432',
    clinic: 'Ruiru Health Center',
    image: require('./assets/dr2.png'),
  },
  {
    id: '3',
    name: 'Dr. Esther Kamau',
    location: 'Kiambu',
    phone: '0700123456',
    clinic: 'Kiambu Medical Clinic',
    image: require('./assets/dr1.png'),
  },
  {
    id: '4',
    name: 'Dr. James Njoroge',
    location: 'Gatundu',
    phone: '0789456123',
    clinic: 'Gatundu Care Hospital',
    image: require('./assets/dr2.png'),
  },
  {
    id: '5',
    name: 'Dr. Mercy Nduta',
    location: 'Juja',
    phone: '0711223344',
    clinic: 'Juja Community Clinic',
    image: require('./assets/dr1.png'),
  },
  {
    id: '6',
    name: 'Dr. Brian Mwangi',
    location: 'Githunguri',
    phone: '0722334455',
    clinic: 'Githunguri Health Center',
    image: require('./assets/dr2.png'),
  },
  {
    id: '7',
    name: 'Dr. Alice Wairimu',
    location: 'Limuru',
    phone: '0733445566',
    clinic: 'Limuru Wellness Center',
    image: require('./assets/dr2.png'),
  },
  {
    id: '8',
    name: 'Dr. Samuel Kariuki',
    location: 'Kikuyu',
    phone: '0744556677',
    clinic: 'Kikuyu Care Clinic',
    image: require('./assets/dr1.png'),
  },
  {
    id: '9',
    name: 'Dr. Anne Njeri',
    location: 'Karuri',
    phone: '0755667788',
    clinic: 'Karuri Health Clinic',
    image: require('./assets/dr1.png'),
  },
  {
    id: '10',
    name: 'Dr. Peter Macharia',
    location: 'Ndenderu',
    phone: '0766778899',
    clinic: 'Ndenderu Medical Center',
    image: require('./assets/dr1.png'),
  },
  {
    id: '11',
    name: 'Dr. Janet Nyambura',
    location: 'Wangige',
    phone: '0777889900',
    clinic: 'Wangige Health Services',
    image: require('./assets/dr2.png'),
  },
  {
    id: '12',
    name: 'Dr. John Karanja',
    location: 'Kabete',
    phone: '0788990011',
    clinic: 'Kabete Wellness Clinic',
    image: require('./assets/dr2.png'),
  },
  {
    id: '13',
    name: 'Dr. Lilian Waithera',
    location: 'Kahawa',
    phone: '0799001122',
    clinic: 'Kahawa Medical Center',
    image: require('./assets/dr1.png'),
  },
  {
    id: '14',
    name: 'Dr. Michael Njenga',
    location: 'Ruaka',
    phone: '0700112233',
    clinic: 'Ruaka Health Clinic',
    image: require('./assets/dr1.png'),
  },
];

  // Add more doctors here...


export default function FindDoctorScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Nearby Mental Health Specialists</Text>
      <FlatList
        data={doctors}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.row}>
              <Image source={item.image} style={styles.image} />
              <View style={styles.details}>
                <Text style={styles.name}>{item.name}</Text>
                <Text>Location: {item.location}</Text>
                <Text>Phone: {item.phone}</Text>
                <Text>Clinic: {item.clinic}</Text>

              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#d8b4fe' },
  header: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  card: {
  padding: 11.25, // 15 * 0.75
  backgroundColor: '#d4edda',
  borderRadius: 6, // 8 * 0.75
  marginBottom: 11.25, // 15 * 0.75
},
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
 image: {
  width: 50,
  height: 50,
  borderRadius: 25, // half of width/height to keep it circular
  marginRight: 12,
},
  details: {
    flex: 1,
  },
  name: { fontSize: 18, fontWeight: '600' },
});
