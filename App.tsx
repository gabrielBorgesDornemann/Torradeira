import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  Alert,
} from "react-native";
import Card from "./Card";
import Saudacoes from "./Saudacoes";

export default function App() {
  const handleCardPress = () => {
    Alert.alert("Card Clicando", "Você tocou no card!");
  };

  return (
    <View style={styles.container}>
      {/* {Cabeção} */}
      <View>
        <Text style={styles.headerText}>Minha tela estilizada</Text>
      </View>

      <View style={styles.content}>
        <Image
          source={{ uri: "https://reactnative.dev/img/logo-og.png" }}
          style={styles.image}
        />
        <Text style={styles.subtitle}>Explorando Estilos no React Native </Text>
      </View>

      <View style={styles.cardSection}>
        <TouchableOpacity onPress={handleCardPress}>
          <Card texto="Card 1: Estilização com Flex" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Card texto="Card 2: Layout Responsivo" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
  },

  header: {
    backgroundColor: "red",
    padding: 20,
    alignItems: "center",
  },

  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },

  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },

  image: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },

  subtitle: {
    fontSize: 18,
    color: "#333",
    textAlign: "center",
  },

  cardSection: {
    padding: 20,
  },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  cardText: {
    fontSize: 16,
    color: "#333",
  },
});

// const handleButtonPress = () => {
//   Alert.alert("Falha ao retirar torrada. Torradeira explodiu");
// };

// const handleTouchablePress = () => {
//   Alert.alert("Manteiga passada com sucesso. hmmm que delicia");
// };

// return (
//   <View style={styles.container}>
//     <Text style={styles.title}>Bem-vindo a Torradeira Nativa</Text>
//     <Image
//       source={{
//         uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA81BMVEX15cP///8AAADm2b7YnlHCj0z258b+7creolP56cbFkU315cTv4MHXnE3gpFTJlE/q3L/w4sbWmUfGxsbx8fHp6eni4uL4+Pi/v7/a2tqlpaWxsbG3t7eOjo5xcXGBgYEsKSNEREQoHQ9xUyyimIG8sJbx27Ts0KN6WS6SkpLPz88hISFWVlZnZ2fgsXLqypk0NDQqKipHNBtnSyiccz1rZFXJvKAaGBVYUkbTx645Ni6UbTrez7HbpV1bW1tEPzZAQEBYQCG0hEYaEwo8LBd/d2iSiHTlv4jitnqZkH5CMBkkIRw0MSlfRiWIZTUgGA1jXlGWh0zKAAAR8ElEQVR4nO2daVfiShOAeVmiEhBEBUTFDVBcQBHBBccRBXRUxv//a96EdCfdSfWSjeA9Ux/uuQdBeaaqa+vqTux//3WJRf0FQpd/hD9f/hH+fPlH+PPlH+HPl/kRbm6dlnd2tre3K5WK9t+d8vppcWMOfzdswtJmudK8+B1nytX5XnP7dKMU2jcIj3CjWN69uGSj2eSgulsORafhEGpw52fScJacHeztbAX8XYIn3Nip9j3AEXJeOQ3w+wRLWDrdvfJHh+VXpRjQ0gyQsLTuV3m0XFbLmwF8rcAIhXiHnefrI0KuvzqHQsrzbd/OJxjC4p7oqx5+HZ2cTLvDVCpHSXrYnZ5cv76wP/m74g8yAMLS9oFQFyTr89dJdzjU4NIpXdLptEY67D4cMXV6UfaxJn0Tbu56CQvxl9fnaVfTp0E5A83lUsPu0TP49kvvivRJuFn1gmfK3+spSaljplPDKUi555HRF2HRH58hL9fdIbZYU5vDKbA09zy5Vh+EYvciLZ3pkNCkQTnsfh3a39f0sB69Epa2zwPjm8mrZq8UZCqtrcsjmyavduZEuMUxz/7TzbhWq/fuBhlVzWQyeU0SicFdvfY+Ht1+cCCfu2kHZLp7Tb/p3K2peiAs7cDRYf9pVOsNMkuarOiixExRDdD8miaDev39+wkmfTmxWesMcvpKvakSMmGpAmWet6O6zqZxxdiicyY00UkHvdroFlSkg1FblF3Ku/5ypUa3hE1nbvY07mVWlkiV8UQ1KDXOtXyiNwYoO10nY27YId+yHhrhtv3b9G/qsSWu4viUGmZ95LDYP900wEja6m44hOu2ZkR/1FOX3NLZITVdrvXGT05bTTkYH/5ab7iQjhvyhBs2/3lbz3jFc0ImeiOb+V+nnIwpwq9eyqY40oQ79BcYD1zbJgSJGROJtUTdtianjuWYynWt+NiX9DeShBsX5N/+rMWWJB2LUExFapq8oxX5CphqivCqch0dOcJTMkLsa3wB4c2EVORgTDGeODxOKjd1iShFWCH/ai0TgHnSkiGN9Z38Y3+GXEstBkRIZtijWOB8DsYxydgFLPXQ/KnEWhQTln5Zf+72LlD7pBgTFuPdDYF47YyNKTP8X4k9qpCwRCShtSD8J1PyBGP93vqrnZQT0fQ3B74JS1Zf/nMQmgINUS3EPGmqf52LMW0iVn0SEoCjUBVoCGWqRJ7jXIw5E1FUaggIrTK3FrICHYgJUo0PTn9jpqmCmMEntOJ8by6AVHDUViMHMZ3CWeqlD8Im/v39QfgWioVQY/7u00ScOhCHckuRR7geBSCNmLDihkOLuS7+Ebdc5BBumAnUXAEpn5pYG1nuxu5RcyfoJ1e8UopDaC7C3nwBbYiWv3EEjRz2NryCmE1olkv1OTkZFqKZqL7YQ7+1FDkJKpOwhD88nj+gzaWaiB2HEnGhceGBcBd99klkogqSgBlBQ712ONQ/6CfsfXEW4aasl1Eak9Zj8rHVjilqaIimu7F7G9NOD1wT4opJkMqojVYhm00ms9lCYRIoIL0WzaBhX4o53LphKpFBuIE+dy/4Go2khoek0ArWUskMLo9D/7MjCUc/+OWSEFf1db6NKi0LUENsB4tIeJvEHVbig12JRwJ3yiDEbkbgR5UCAZjMBqxEEjGPc9QXuw7xStxzRXgqp8KYkqQI38J0qNjbHOUYSmQkNjAhav72RaFQmZBKLDTY3lQLJx5cLVVM4eb/kOFOGVuLMCHKSCWC/VsBr8QsZxkqsUnrreFBw5CdftmV2OH6GpAQG+lA+J1U5fgxq8WLbCHZYhMojaz+lol7RCpkfGMl2rZRcY0BmylIiDzpk8x3UJRGezJpHzc4WY3ymDWs2DUh6E8dK5FrpiDhhbSRGoyCpE2NZT1HE6iSsrtTHPXh5BQixO2noKomP4SgEh9gM+1LE+KcVLwMJUV50xGzWS+fhZK3jj0BR18Y7ElBhFvG++8DjG6PBc0XHXv6hZAS7Wb6zFmIECHay74NsjA8nrRlogWwosmYuLYPmikO+mBLCiJELbZRkIRSBaReiTnDJpmAo2LYVifihXguS4gqp/d5t2eU41lktfsjwExfbIRD42WwI8UhFCWlwYsRNpO2sAmlbraFiPfboM22RSJsoKByTGewkDe11fq46QZVUBBhdYEJR7CrQakpVOgvEqE6q6ezjzFbFQK4Gjvhl/FyecGtVGnMwibXmdZgwmt2QOQQ1ubuaVQ9bMYcYYUkHMOEqL+/LUkYRjyUFLBQBjyNTpjOJXHQwCFfVoeoeLqJotkNCBUtUM+tm0obdbe3dYh21URtqHkJlJhq+jPE0GIOtb6h1BsiLBpv389EzTYTKFi8Ws0hT/EQbxwGVj35EirzRiqcLpuEM5czNMak+tB0DVjjH0QULkAhm1E1bKSWDnNE5n0AwYCE1eicqUMoFaI5oldLhTMzxeFQunrCm6NSnaiwBQj38S5JmLMSb+kKGBf5i7AQocLikOq0J3NmOxGc44M7wmdRZTUOARxp/GGZRlw+5CxDBiHK2+4jX4ikm8Gx0KbC5DJWoYt+qTlJE7WZUm4Gz7kNbSpM4olaEEWwuxa1NyUBsZvprNpUiKdqGCN8DEJkpv1o0xpw6yllA8TN0jNXu2umN53PRCJLyEiBR06mNhUm8dQQVDlxCPHYZaS5KVRU2N3MKrbRAwYIkxBPREUZMEhH2kPfp0u7GdNG2VOmLMISPmER/NkDWYGKikO7H8U2ytrF58xE4WNq0dXBVKhAJ4ZswX75AX3LKyYgZ3IPz15G5mygsill0+Ehep1zGYrEbOKcp0u5hIxshm2j3PlSrMT9TDSZjQQhakD1PU7QYh3Gb6NRIkWI/rnpjG0Ztbq5BxLYhOaAaVTJG0X4DXkaTMgK9gLCLYswIm8DRAs6KcVWCu4bignL8agRyTYiHhfKUYTc0ldISB06jASRytrQ95jS4QK9CnWCxYTNeOSIpJmidv4r7Uyf/USLi3jkiJCZUt4Um+lvT4RobMg6YD12EzTUIIa+KTNFncQvykxx4s1ZiGxC9Nm8dWjlRhZRVRqaBDDZTgCaBSKYtnEudRGet1BXLETpuDhJFgrJN9+AoK+h6qdl1AvmHJphEqLtmc/MypKFKNeZUlqzudpCyzchNKRwRIbEZV4/X0CI2m3fa7GYhXgnY6dKGw0OBzDZDk3QUkEfL0QPhCjg3+iLaQmvAakywxzgD2CyPQ+YKR300Yvsg6RMQhTwRzOmJePfT27gFM3LBkJImmn+FliIq2hvlJ2aMglRPxFBLQ1uPz4lI6Ixa5kMZHYf6mScUK4GdaI8dDHQPQO4E7WyFJO9q0Vp4HXImd2XFVKHaCF2IFfDjvlMQrRL6mVOWHM1Wf7svrwAm/h0QxEPebsnvHQTH+yIjVaSN7vvQsiIOEBt7zSFiAiZZyyZp/PwXr6n+l5VvJ0g4RNiV0MX+qifyDztzCJEAf8j6nkM6MAFmNUwnSmLEFX40W90kzoce3GmLEKU0gQ66+2bEDnTL6iAYnYyWIQLM/kF1IgdqIBihgsWITroHPUWKU2ItmdeoXABTgvxCKt0wI9OqHBhOPgXKjPFJaLLM6S4hzH36xS4hHl03ILOvVHTlJV7swh9pDThEa59QoS8AzNswtKZn4AfGuETEPJXUVu46Y4Qn1bPRw0oEfIf+AGRT/gRuQrB3j61e7E8NF5kXY3Bn8X4jDxY0DUw6jVMIcIDd4Soh7EIg9AkIZoaOoFCPusaHv6dCtGnNOAELdVuMytERshnEKJNi0juphETXtPbM3+9EO4uSkoDNhSfKcJVlNQwOvsMQpTSLMKkNzA3RKfeq6gGZsxjMAjnOcuu8BsCQKfmld7r5ic1DELUw5DqcfsRVVEax+1Ju91gXlFEEg6Mr0VPRuGkxt30JXJPYfcwlNjkMVso6DcUJVvHMCPQ9n6hdYiuw2KkbXzCkF2pcpw0Lw5JZhk7OVRxgb4X5Upxlc/Yf4IJN+dCqDay5BVFjGuYhINDmJBxfSL3Bp6PcAnpO5iSzvOx7gjd3N4yp6TN3MKxCAEligmHxouMTg1MiEYvQ07azI1GvBLBizPE420oMT3zQBh60vZWoADBizPEhPytC5gQp6Whh8N2smB4Gy1gMDY6xIRJD4Rz67QpsePJYzKr30rImt2ACOlm26oHQrR5OI+kTRHdLAkNYfonRI/qiL7TFnNDCJdPMCEa1I/62NNMKMIPHiFcPnHva4t6a20mEoToaBfcEwYJ8TyUgHA+GpYgPDRehQtEkHBTRKjv8eqja3JXBwVICLX1BSUw75Qs89CTEmu39BCmefk3Rs0TLiG9k49nauCNbt6tgqwNYKWdJW5LfAxkIsEXYccrIeMUgnJM31pqv/VoDoS0leLdJ3gWGiREW9yMxNuceUICVgQhEYKeBjdqXBCiA0GMDWD9Sq6odAhGfA+EFS6hhviI8mVOwhwOYZxH6OIsN+oHM0sLLV9+0/JlPWGe8G71DI0w6ZdQeCWdirECmnyaO6FU8aSqwQzkB0foYh3OsXgSSyiE6CD3QhRPMoTu4yEiDL2nLyWhEKICOPpBDF3EhKuuCUuLVACHQrhxtqiE4L6Fh8wb3fU132cgMQU6cmEjdF09oQL4I/pxIV0Awr/0Pv4qdxCaQ7ggN9JB0/owoXyNbx7qihpuJsJdbg99GkQoegLLnAQYoe3YCNG4iXyvDREKn4M0HwHGoJ9thKibCM/Q8ggXYFwoBs7TfNkIkYeV7whvLSwhPBPlvquPG1ELS3jkl3BhzlrMRJ5Q/hkli0WYcBLS05fmOVIQ8D9B6H4P2DdhYCfX5Ajd7+OX/RGqSrvVagcFKEHofhYDEX57JFT0x+kVHHfHh0aI52kYT80NnhBNyXh5uhMogC+FCRmn14K3UrStkX0MBlAcLfDUF+M4QniEHg7jqyowlCGcZMdHSlzMJvrzpaqx+eb+JLfGdtxut49ts7RAXmrTITpF6mK+1GfWpkyyhWxh4tbRKI1WwRimpfd6AEI6L11Gl+q7mBH2m3nrT2JzvyFlDZtmqSlMoHqiawvcpmFcFhVO9eRhgIF8lCJ13YSwPsQlPuMA4sLU+GrD2nel1jBwGoEm9HBmJppnIxj7rvoDnx7bjHUIdjFwOHRzjzDqtfXn3E3U5xTfWm+TY3oUCehE0YSC4+qL9PQHIxzal7BQh7zHBjAIS35u/QhchKeCkKNxdRc0OhO0GLtrgpNdeBm6O8u9UHvAgk4UjobMm4R5+/ihj3lLCb96Mu/zdnfzxwKdIKXPAaPLTaxzwOal+i7v88apd9R0ulCn1e23fVmAByxA/jNKFmFrBro1Aj88YPU6LlQhfwp6EYYxgHBoDn09m4Ccu5JhwovFWYikkaJl2DEsFD/0MM6+MYJNiK+cry1FHfSp2y+RkZ7oJf4yfkAQX4MsQvOm65v80kqkpkqqED+lRL/4Y3Vo8vEvu2adIa2aH/+u51c0yoh0CRwC1ve4l5OWj+Fek8wmLMYJuR3Ve4PMki4rTFlCsrIyq89VBb80+6lHQOia3fjD6nL3r/XtmBe18Qltd11r8nH/dDsav9fqhNQMeX8fj0Y3N9+3T/f395+f+zP5/Py81z7yfTOu1Xt5hOodMJ/AjwqKrw47xPdihwkBIZ6iDUo+bse1Xl6N6RYvafKqZaL5tTp+jkH86w/xa6+YlwmKCU1/Gqh8fo/e64OBtrRn1stDtRS4lqjfwr/unHXBlxTh/zar8K8NQD6ebm/G9R61uklaNTPTXz6fX9PwRveMX8O7qFyGUPM3e6ExIul/3GusNW2p3g0yumK1En8NST7Rq72P9vvMDwucqAyhJuvVK+ZfCEH6+/dPmtzvi99a5T22wwWhJsXy7sVv9r9kNHLOebKMa8KZbGwW17crzd3d3b296kz2dnVpNpuVyvZOef10a6u4acjGTLT/KW7pn9k7PwucTxQEPRD6lM317ebFZUB8e+IQQcicCJEUT8vN6rkfkz/YlTZPJPMlRLJR3CpX9qrn7pR6Wd1d5z2MhCGREGIplTY2T3cqTU2vl+y1enW+16yUixuSvtMukRI6RCMuFjWXpYvusTxCUbJYhGHIP8KfL/8If778I/z58o/w58t/n/D/71ot9fGogaQAAAAASUVORK5CYII=",
//       }}
//       style={styles.image}
//     />
//     <Button title="Retirar torrada" onPress={handleButtonPress} />
//     <TouchableOpacity
//       style={styles.customButton}
//       onPress={handleTouchablePress}
//     >
//       <Text style={styles.buttonText}>Passar manteiga</Text>
//     </TouchableOpacity>

//     <Card texto="Torrada"></Card>
//   </View>
