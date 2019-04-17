export const MT = {
  name: "profile",
  forms:[
  {
    id: "profile",
    config: "profile",
    // listeners: [],
    type: "form",
    method: "post",
    groups: [
      {template: "boxHidden",
      title: "User",
      id: "user",
      fields: [
        {label: "id", name: "id", template: "inputText", disabled: "disabled"},
        {label: "username", name: "username", template: "inputText", disabled: "disabled"},
      ]},
      {template: "box",
      title: "Perfil",
      id: "name",
      fields: [
        {label: "Nome completo", name: "fullname", template: "inputText"},
        {label: "Nome de exibição", name: "name", template: "inputText"},
        {label: "Status", name: "description", template: "inputText"}
      ]},

      {template: "box",
      title: "Dados Cadastrais",
      id: "personalData",
      fields: [
        {label: "Endereço", name: "address", placeholder: "seu endereço", template: "gMapsPlacesAutocomplete",
          return: "location", // field name within autocomplete returns
          autocomplete: "section-address",
          apiKey: "",
          options: {
            componentRestrictions: {country: 'br'}
          }
        },
        {label: "geocode", name: "location", template: "inputText"},
        {label: "vicinity", name: "vicinity", template: "inputText"},
        {label: "googlePlace", name: "googlePlace", template: "inputText"}
      ]},

      {template: "box",
      title: "Foto",
      id: "picture",
      fields: [
        {label: "Imagem", name: "picture", template: "inputFile", path: "path"
          // crop: true,
          // cropFormats: {
          //   original: {max_width: null, max_height: null}
          // }
        },
        {label: "URL da imagem", name: "path", template: "inputText", disabled: true}
      ]},

      {template: "boxHidden",
      title: "datetime",
      id: "datetime",
      fields: [
        {label: "Data", name: "date", template: "inputText", mask: '99/99/9999'}, // datepicker
        {label: "Horário", name: "time", template: "inputText", mask: "99:99:99"}, // time
        {label: "Data de atualização", name: "updateTime", template: "inputText", mask:"99/99/9999 99:99"},
        {label: "Data de entrada", name: "uiStartDate", template: "inputText", mask: "99/99/9999 99:99:99", description: "Agendamento de matéria: Data de entrada"},
        {label: "Data de saída", name: "uiEndDate", template: "inputText", mask: "99/99/9999 99:99:99", description: "Agendamento de matéria: Data de saída"},
      ]},
      {template: "box",
      title: "Foto de Capa",
      id: "coverPhoto",
      fields: [
        {label: "Imagem", name: "picture", template: "inputFile", path: "path"
          // crop: true,
          // cropFormats: {
          //   original: {max_width: null, max_height: null}
          // }
        },
        {label: "URL da imagem", name: "path", template: "inputText", disabled: true}
      ]},

      {template: "box",
      title: "Redes Sociais",
      id: "socialmedia",
      fields: [
        {label: "facebook", name: "facebook", template: "inputText"},
        {label: "instagram", name: "instagram", template: "inputText"},
        {label: "youtube", name: "youtube", template: "inputText"},
        {label: "twitter", name: "twitter", template: "inputText"},
        {label: "site", name: "site", template: "inputText"}
      ]},

      {template: "box",
      title: "Informações Pessoais",
      id: "personalInfo",
      fields: [
        {label: "Data de nascimento", name: "birthdate", template: "inputText", mask: "99/99/9999"},
        {label: "Telefone principal", name: "phone", template: "inputText", mask: "(99) 99999-9999"},
        {label: "Telefone adicional", name: "phone2", template: "inputText", mask: "(99) 99999-9999"},
        {label: "E-mail", name: "email", template: "inputText"},
        {label: "Estado", name: "state", template: "select", options:[
            {name: "Acre", value: "AC"},
            {name: "Alagoas", value: "AL"},
            {name: "Amapá", value: "AP"},
            {name: "Amazonas", value: "AM"},
            {name: "Bahia", value: "BA"},
            {name: "Ceará", value: "CE"},
            {name: "Distrito Federal", value: "DF"},
            {name: "Espírito Santo", value: "ES"},
            {name: "Goiás", value: "GO"},
            {name: "Maranhão", value: "MA"},
            {name: "Mato Grosso", value: "MT"},
            {name: "Mato Grosso do Sul", value: "MS"},
            {name: "Minas Gerais", value: "MG"},
            {name: "Pará", value: "PA"},
            {name: "Paraíba", value: "PB"},
            {name: "Paraná", value: "PR"},
            {name: "Pernambuco", value: "PE"},
            {name: "Piauí", value: "PI"},
            {name: "Rio de Janeiro", value: "RJ"},
            {name: "Rio Grande do Norte", value: "RN"},
            {name: "Rio Grande do Sul", value: "RS"},
            {name: "Rondônia", value: "RO"},
            {name: "Roraima", value: "RR"},
            {name: "Santa Catarina", value: "SC"},
            {name: "São Paulo", value: "SP"},
            {name: "Sergipe", value: "SE"},
            {name: "Tocantins", value: "TO"}
          ]
        },
        {label: "Cidade", name: "city", template: "inputText"},
        {label: "Bairros atendidos", name: "neighborhoods", template: "inputText", description:"Para mais de um valor, separe por vírgula."},

        {label: "Descrição pessoal", name: "text", template: "textarea"},
        {label: "Escolaridade", name: "schoolarity", template: "inputText"},

        {label: "Línguas faladas", name: "spokenLanguages", template: "inputText", description:"Para mais de um valor, separe por vírgula."},
      ]},

      {template: "box",
      title: "Informações do passeio",
      id: "rideInformation",
      fields: [
        {label: "O passeio", name: "ride", template: "textarea"},
        {label: "Regras do passeio", name: "rideRules", template: "textarea"}
      ]},

      {type: "multiple",
      template: "boxMultiple",
      title: "Regiões atendidas",
      id: "regionsServed",
      controls: true,

      fields: [
        {label: "Região", name: "address", placeholder: "região, bairro, cidade", template: "gMapsPlacesAutocomplete",
          return: "location", // field name within autocomplete returns
          apiKey: "",
          options: {
            types:['(regions)'],
            componentRestrictions: {country: 'br'}
          }
        },
        {label: "geocode", name: "location", template: "inputText"},
        {label: "vicinity", name: "vicinity", template: "inputText"},
        {label: "googlePlace", name: "googlePlace", template: "inputText"}
      ]},

      {template: "box",
      title: "Tabela de preços",
      id: "prices",
      fields: [
        {label: "Passeio avulso", name: "oneway", template: "inputText"},
        {label: "2x semana", name: "twice", template: "inputText"},
        {label: "3x semana", name: "threeTimes", template: "inputText"},
        {label: "4x semana", name: "fourTimes", template: "inputText"},
        {label: "5x semana", name: "fiveTimes", template: "inputText"},
        {label: "Passeio avulso fim-de-semana ou feriado", name: "holiday", template: "inputText"}
      ]},
      {template: "submit",
      fields: [
        {label: "Preview", name: "commit", template: "button", type: "submit", id: "preview", value: "preview"},
        {label: "Salvar", name: "commit", template: "button", type: "submit", id: "save", value: "save"},
        {label: "Publicar", name: "commit", template: "button", type: "submit", id: "publish", value: "publish"}
      ]}
    ],
    info: {
      title: 'name.name',
      userAddress: 'personalData.address',
      userLocation: 'personalData.location',
      picture: 'picture.path',
      // date: 'datetime.date',
      // hour: 'datetime.time',
      slug: 'user.username',
      regionsServed: 'regionsServed[].address',
      regionsLocation: 'regionsServed[].location',
      vicinity: 'regionsServed[].vicinity'
    }
  }]
}




















