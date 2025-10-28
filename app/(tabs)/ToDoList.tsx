import React from 'react';
import Ionicons from "@expo/vector-icons/Ionicons";
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useTarefas } from '@/hooks/useTarefas';

export default function ToDoList() {
    const { tarefas, novaTarefa, setNovaTarefa, adicionarTarefa, removerTarefa } = useTarefas();

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Lista de cidades preferidas</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Digite o nome do jogador"
                    value={novaTarefa}
                    onChangeText={setNovaTarefa}
                />

                <TouchableOpacity style={styles.botao} onPress={adicionarTarefa}>
                <Text style={styles.textoBotao}> Adicionar</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={tarefas}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.tarefaContainer}>
                        <Text style={styles.tarefaTexto}>{item.texto}</Text>
                        <TouchableOpacity onPress={() => removerTarefa(item.id)}>
                            <Text style={styles.remover}>                
                                <Ionicons name={ 'football'} color={'black'} size={24} />
                            </Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: '#37ddfa', color: 'black' },
    titulo: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20, color: 'black' },
    inputContainer: { flexDirection: 'row', marginBottom: 10 },
    input: { flex: 1, borderWidth: 1, borderColor: 'black', padding: 10, borderRadius: 5, marginRight: 10, color: 'black' },
    
    botao: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
        alignItems:'center',
        justifyContent: 'center',
        minWidth: 100,
    },
    textoBotao:{
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold'
    },
    
    tarefaContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        backgroundColor: 'white', 
        color: 'black', 
        padding: 15,
        marginBottom: 5, 
        borderRadius: 5, 
        shadowColor: '#37ddfa', 
        shadowOpacity: 0.1, 
        shadowRadius: 2, 
        elevation: 2
    },
    tarefaTexto: { fontSize: 16 },
    remover: { fontSize: 18, color: 'white' }
});