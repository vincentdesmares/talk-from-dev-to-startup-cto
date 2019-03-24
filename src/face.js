import React from 'react'

function random(i) {
  var x = Math.sin(i) * 1000
  return x - Math.floor(x)
}

export default function Face({ className, style }) {
  return (
    <>
      {/** Generate your own face here : https://ondras.github.io/primitive.js/ **/}
      <style>
        {/** Replace 194 with the number of triangles you picked. **/}
        {Array.apply(null, Array(194))
          .map(function(x, i) {
            return i
          })
          .map(
            i => `
      .face :nth-child(${i}) {
         position: relative;
         animation: transform${i} 800ms ease-out;
      }
      @keyframes transform${i} {
        0% {
          transform: translateX(${random(i) *
            400 *
            (i % 2 === 0 ? 1 : -1)}px) translateY(${random(i) *
              400 *
              (i % 3 === 0 ? 1 : -1)}px) rotateY(${random(i) *
              200 *
              (i % 3 === 0 ? 1 : -1)}deg) scale(${random(i)});
        }
        100% {
          transform: translateX(0px) translateY(0px) rotateY(0deg) scale(1);
        }
      }`
          )}
      </style>
      <svg
        viewBox="0 0 458 632"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`face ${className}`}
        style={style}
      >
        <path
          d="M209 169L216 237L145 154L209 169Z"
          fill="#4F2B1C"
          fill-opacity="0.7"
        />
        <path
          d="M144 475L78 327L150 292L144 475Z"
          fill="#03060E"
          fill-opacity="0.86"
        />
        <path
          d="M201 281L245 490L328 331L201 281Z"
          fill="#050204"
          fill-opacity="0.83"
        />
        <path
          d="M203 183L217 440L173 213L203 183Z"
          fill="#8F6B5E"
          fill-opacity="0.96"
        />
        <path
          d="M156 158L194 162L214 202L156 158Z"
          fill="#0D0200"
          fill-opacity="0.57"
        />
        <path
          d="M143 181L140 267L196 182L143 181Z"
          fill="#F2C2B3"
          fill-opacity="0.6"
        />
        <path
          d="M204 265L351 357L258 0L204 265Z"
          fill="#EBEBEC"
          fill-opacity="0.64"
        />
        <path
          d="M129 192L153 158L136 231L129 192Z"
          fill="#481B07"
          fill-opacity="0.47"
        />
        <path d="M220 320L176 330L195 392L220 320Z" fill="#5C5960" />
        <path
          d="M169 342L218 311L205 265L169 342Z"
          fill="#DCAB90"
          fill-opacity="0.37"
        />
        <path
          d="M206 174L147 160L148 182L206 174Z"
          fill="#2C150B"
          fill-opacity="0.54"
        />
        <path
          d="M165 242L174 216L181 231L165 242Z"
          fill="#FFEFDB"
          fill-opacity="0.42"
        />
        <path
          d="M217 208L177 293L217 230V208Z"
          fill="#905F4F"
          fill-opacity="0.75"
        />
        <path
          d="M302 354L275 279L290 215L302 354Z"
          fill="#D3D7D9"
          fill-opacity="0.95"
        />
        <path
          d="M154 294V277L132 309L154 294Z"
          fill="#4E4C52"
          fill-opacity="0.7"
        />
        <path
          d="M180 326L155 296L145 358L180 326Z"
          fill="#211831"
          fill-opacity="0.32"
        />
        <path
          d="M183 313L145 306L173 228L183 313Z"
          fill="#FFD6C5"
          fill-opacity="0.5"
        />
        <path
          d="M167 249L161 199L154 255L167 249Z"
          fill="#AB462F"
          fill-opacity="0.32"
        />
        <path
          d="M162 209L208 215L132 223L162 209Z"
          fill="#36100C"
          fill-opacity="0.31"
        />
        <path
          d="M174 210L146 180L139 205L174 210Z"
          fill="#FFF1EB"
          fill-opacity="0.56"
        />
        <path
          d="M205 280L206 252L272 306L205 280Z"
          fill="#DEE2E6"
          fill-opacity="0.78"
        />
        <path
          d="M183 336L145 290L151 288L183 336Z"
          fill="#57433E"
          fill-opacity="0.55"
        />
        <path
          d="M210 286L276 308L343 632L210 286Z"
          fill="#090A0E"
          fill-opacity="0.86"
        />
        <path
          d="M130 194L142 243L140 169L130 194Z"
          fill="#5D4034"
          fill-opacity="0.46"
        />
        <path
          d="M166 213L197 183L200 201L166 213Z"
          fill="#C7947E"
          fill-opacity="0.55"
        />
        <path
          d="M166 274L185 287L199 268L166 274Z"
          fill="#653B22"
          fill-opacity="0.49"
        />
        <path
          d="M188 252L199 243L175 212L188 252Z"
          fill="#723A2B"
          fill-opacity="0.47"
        />
        <path
          d="M151 235L191 327L157 299L151 235Z"
          fill="#F1DBCF"
          fill-opacity="0.7"
        />
        <path
          d="M211 180L215 223L192 181L211 180Z"
          fill="#190A06"
          fill-opacity="0.47"
        />
        <path
          d="M148 292L85 323L138 362L148 292Z"
          fill="#0C0C13"
          fill-opacity="0.44"
        />
        <path
          d="M137 203L186 276L187 248L137 203Z"
          fill="#F3A295"
          fill-opacity="0.31"
        />
        <path
          d="M146 327L185 365L147 292L146 327Z"
          fill="#75809A"
          fill-opacity="0.47"
        />
        <path
          d="M134 237V220L144 244L134 237Z"
          fill="#F99D90"
          fill-opacity="0.57"
        />
        <path
          d="M178 292L110 226L176 314L178 292Z"
          fill="#EAE4E1"
          fill-opacity="0.66"
        />
        <path
          d="M208 334L198 325L233 296L208 334Z"
          fill="#211F25"
          fill-opacity="0.68"
        />
        <path
          d="M173 329L162 315L212 317L173 329Z"
          fill="#D5AC9C"
          fill-opacity="0.36"
        />
        <path
          d="M164 347L123 310L149 355L164 347Z"
          fill="#000D1C"
          fill-opacity="0.37"
        />
        <path
          d="M297 336L275 312L279 388L297 336Z"
          fill="#000309"
          fill-opacity="0.56"
        />
        <path
          d="M185 362L171 321L172 348L185 362Z"
          fill="#DAE9FC"
          fill-opacity="0.49"
        />
        <path
          d="M142 258L141 218L161 235L142 258Z"
          fill="#F2E7E4"
          fill-opacity="0.47"
        />
        <path
          d="M172 274L155 256L177 247L172 274Z"
          fill="#FEE1D9"
          fill-opacity="0.54"
        />
        <path
          d="M216 333L223 342L179 336L216 333Z"
          fill="#C6D1E9"
          fill-opacity="0.24"
        />
        <path
          d="M149 316L154 324L167 307L149 316Z"
          fill="#0F0304"
          fill-opacity="0.35"
        />
        <path
          d="M148 308V290L154 297L148 308Z"
          fill="#CEE0FB"
          fill-opacity="0.43"
        />
        <path
          d="M167 330L165 340L151 337L167 330Z"
          fill="#C5C8D4"
          fill-opacity="0.45"
        />
        <path
          d="M210 222L178 209L212 200L210 222Z"
          fill="#221410"
          fill-opacity="0.22"
        />
        <path
          d="M149 287L166 313L160 310L149 287Z"
          fill="#543A31"
          fill-opacity="0.65"
        />
        <path
          d="M154 318L159 329L152 340L154 318Z"
          fill="#525564"
          fill-opacity="0.8"
        />
        <path
          d="M165 275L215 296L213 315L165 275Z"
          fill="#A87C63"
          fill-opacity="0.59"
        />
        <path
          d="M142 217L153 181L169 197L142 217Z"
          fill="#F8E8E0"
          fill-opacity="0.56"
        />
        <path
          d="M196 305L179 276L182 308L196 305Z"
          fill="#C5947C"
          fill-opacity="0.69"
        />
        <path
          d="M81 331L152 313L70 380L81 331Z"
          fill="#0E1118"
          fill-opacity="0.77"
        />
        <path
          d="M174 233L214 241L199 227L174 233Z"
          fill="#C68976"
          fill-opacity="0.5"
        />
        <path
          d="M206 283L219 289L208 280L206 283Z"
          fill="#01070B"
          fill-opacity="0.52"
        />
        <path
          d="M212 283L157 240L208 305L212 283Z"
          fill="#551800"
          fill-opacity="0.14"
        />
        <path
          d="M219 221L205 215L208 244L219 221Z"
          fill="#89463F"
          fill-opacity="0.47"
        />
        <path
          d="M209 315L179 326H196L209 315Z"
          fill="#D7BDB3"
          fill-opacity="0.52"
        />
        <path
          d="M189 179L209 228L173 180L189 179Z"
          fill="#AE826D"
          fill-opacity="0.45"
        />
        <path
          d="M145 220L141 189L145 184V220Z"
          fill="#EAD2CB"
          fill-opacity="0.62"
        />
        <path
          d="M139 296V309L124 320L139 296Z"
          fill="#434B59"
          fill-opacity="0.36"
        />
        <path
          d="M234 295L263 301L203 277L234 295Z"
          fill="#E1EBEE"
          fill-opacity="0.47"
        />
        <path
          d="M147 176L133 207L138 179L147 176Z"
          fill="#483128"
          fill-opacity="0.52"
        />
        <path
          d="M144 252L153 247L161 279L144 252Z"
          fill="#DAC2B5"
          fill-opacity="0.62"
        />
        <path
          d="M218 282L214 178L329 333L218 282Z"
          fill="#DADEE0"
          fill-opacity="0.54"
        />
        <path
          d="M227 317L202 427L248 308L227 317Z"
          fill="#060508"
          fill-opacity="0.97"
        />
        <path
          d="M157 224L152 211L181 214L157 224Z"
          fill="#563432"
          fill-opacity="0.24"
        />
        <path
          d="M174 160L145 157L146 169L174 160Z"
          fill="#897767"
          fill-opacity="0.4"
        />
        <path
          d="M272 306L265 330L251 299L272 306Z"
          fill="#191F27"
          fill-opacity="0.75"
        />
        <path
          d="M211 162L458 341L215 216L211 162Z"
          fill="#D4D4D5"
          fill-opacity="0.75"
        />
        <path
          d="M145 224L147 227L145 214V224Z"
          fill="#735A5D"
          fill-opacity="0.47"
        />
        <path
          d="M210 243L214 213L218 223L210 243Z"
          fill="#975656"
          fill-opacity="0.84"
        />
        <path
          d="M207 337L223 311L208 346L207 337Z"
          fill="#B1AEAC"
          fill-opacity="0.48"
        />
        <path
          d="M171 338L173 347H121L171 338Z"
          fill="#51576A"
          fill-opacity="0.62"
        />
        <path
          d="M184 343L161 308L196 343H184Z"
          fill="#3B393D"
          fill-opacity="0.3"
        />
        <path
          d="M143 293L141 317L149 288L143 293Z"
          fill="#010005"
          fill-opacity="0.49"
        />
        <path
          d="M166 231H146L169 228L166 231Z"
          fill="#886464"
          fill-opacity="0.57"
        />
        <path
          d="M172 220L171 238L178 214L172 220Z"
          fill="#FFE0DE"
          fill-opacity="0.41"
        />
        <path
          d="M199 336L190 345L204 350L199 336Z"
          fill="#AFB1C6"
          fill-opacity="0.41"
        />
        <path
          d="M160 315L167 322L140 314L160 315Z"
          fill="#4A4B56"
          fill-opacity="0.93"
        />
        <path
          d="M175 256L167 272L162 251L175 256Z"
          fill="#F7E3E1"
          fill-opacity="0.59"
        />
        <path d="M137 292L68 334L130 213L137 292Z" fill="#DFE2E5" />
        <path
          d="M195 264L178 278L175 230L195 264Z"
          fill="#BE826F"
          fill-opacity="0.49"
        />
        <path
          d="M223 334L216 346L221 325L223 334Z"
          fill="#5C6C85"
          fill-opacity="0.4"
        />
        <path
          d="M169 251L157 249V241L169 251Z"
          fill="#641406"
          fill-opacity="0.33"
        />
        <path
          d="M145 309L153 339L145 317V309Z"
          fill="#3D5067"
          fill-opacity="0.75"
        />
        <path
          d="M205 129L202 176L210 182L205 129Z"
          fill="#CDCECC"
          fill-opacity="0.62"
        />
        <path
          d="M190 160L203 176L169 180L190 160Z"
          fill="#070401"
          fill-opacity="0.3"
        />
        <path
          d="M198 242L179 235L190 250L198 242Z"
          fill="#5D362D"
          fill-opacity="0.52"
        />
        <path
          d="M163 181L169 222L183 180L163 181Z"
          fill="#E0B2A1"
          fill-opacity="0.48"
        />
        <path
          d="M205 256V278L220 222L205 256Z"
          fill="#D7D8DD"
          fill-opacity="0.75"
        />
        <path
          d="M181 298L185 288L149 264L181 298Z"
          fill="#E7CAB9"
          fill-opacity="0.54"
        />
        <path
          d="M201 248L200 229L190 228L201 248Z"
          fill="#D69886"
          fill-opacity="0.4"
        />
        <path
          d="M188 174L189 186L217 183L188 174Z"
          fill="#1F0E05"
          fill-opacity="0.3"
        />
        <path
          d="M205 268L188 301L180 299L205 268Z"
          fill="#A57A62"
          fill-opacity="0.59"
        />
        <path
          d="M190 303L171 311L185 331L190 303Z"
          fill="#DBB9AD"
          fill-opacity="0.57"
        />
        <path
          d="M56 166L140 163L107 238L56 166Z"
          fill="#DADBDC"
          fill-opacity="0.46"
        />
        <path
          d="M162 244L180 241L172 239L162 244Z"
          fill="#B0887D"
          fill-opacity="0.71"
        />
        <path
          d="M184 331L185 337L216 322L184 331Z"
          fill="#1B181D"
          fill-opacity="0.48"
        />
        <path
          d="M177 239L181 258L144 291L177 239Z"
          fill="#F5D8D1"
          fill-opacity="0.32"
        />
        <path
          d="M204 336L218 320L199 327L204 336Z"
          fill="#231D24"
          fill-opacity="0.48"
        />
        <path
          d="M124 229L149 292L155 265L124 229Z"
          fill="#D8E2E9"
          fill-opacity="0.39"
        />
        <path
          d="M206 280L208 242L323 326L206 280Z"
          fill="#D8DBDE"
          fill-opacity="0.88"
        />
        <path
          d="M189 205L180 211H216L189 205Z"
          fill="#684D42"
          fill-opacity="0.66"
        />
        <path
          d="M164 324L170 357L152 310L164 324Z"
          fill="#F3EAF0"
          fill-opacity="0.21"
        />
        <path
          d="M147 300L145 313L151 314L147 300Z"
          fill="#41465E"
          fill-opacity="0.56"
        />
        <path
          d="M210 183V232L198 176L210 183Z"
          fill="#130A02"
          fill-opacity="0.33"
        />
        <path
          d="M203 207L200 187L180 177L203 207Z"
          fill="#986C57"
          fill-opacity="0.48"
        />
        <path
          d="M185 333L174 360L180 329L185 333Z"
          fill="#716E70"
          fill-opacity="0.9"
        />
        <path
          d="M154 299L152 337L147 293L154 299Z"
          fill="#D0DEF9"
          fill-opacity="0.2"
        />
        <path
          d="M169 175L186 160L155 161L169 175Z"
          fill="#352719"
          fill-opacity="0.43"
        />
        <path
          d="M135 197L140 230L134 220L135 197Z"
          fill="#6B5852"
          fill-opacity="0.85"
        />
        <path
          d="M178 332V346L171 333L178 332Z"
          fill="#F3FBFF"
          fill-opacity="0.47"
        />
        <path
          d="M186 315L219 304L201 322L186 315Z"
          fill="#B99482"
          fill-opacity="0.46"
        />
        <path
          d="M194 259L207 235V213L194 259Z"
          fill="#A67E69"
          fill-opacity="0.75"
        />
        <path
          d="M256 167L295 204L300 112L256 167Z"
          fill="#C5C3C0"
          fill-opacity="0.48"
        />
        <path
          d="M177 180L190 202L180 209L177 180Z"
          fill="#CA9C89"
          fill-opacity="0.58"
        />
        <path
          d="M146 243L141 225L159 238L146 243Z"
          fill="#FFF5EF"
          fill-opacity="0.41"
        />
        <path
          d="M172 171L130 189L133 182L172 171Z"
          fill="#63483A"
          fill-opacity="0.5"
        />
        <path
          d="M156 367L79 334L143 310L156 367Z"
          fill="#0E1018"
          fill-opacity="0.68"
        />
        <path
          d="M264 318L251 325V376L264 318Z"
          fill="black"
          fill-opacity="0.55"
        />
        <path
          d="M205 209L212 178L201 201L205 209Z"
          fill="#2D1E12"
          fill-opacity="0.36"
        />
        <path
          d="M168 229L177 228L164 243L168 229Z"
          fill="#FFDFDA"
          fill-opacity="0.56"
        />
        <path
          d="M146 224L147 217L160 230L146 224Z"
          fill="#EDD8D4"
          fill-opacity="0.49"
        />
        <path
          d="M182 331L161 307L170 309L182 331Z"
          fill="#AE633B"
          fill-opacity="0.29"
        />
        <path
          d="M273 309H289L295 300L273 309Z"
          fill="#D3D7DA"
          fill-opacity="0.72"
        />
        <path
          d="M195 322L193 329L182 330L195 322Z"
          fill="#B9ACB1"
          fill-opacity="0.47"
        />
        <path
          d="M0 191L138 224L85 278L0 191Z"
          fill="#DEE0E3"
          fill-opacity="0.59"
        />
        <path
          d="M170 226V211L173 218L170 226Z"
          fill="#774642"
          fill-opacity="0.52"
        />
        <path
          d="M153 182L162 207L169 185L153 182Z"
          fill="#EED1C6"
          fill-opacity="0.6"
        />
        <path
          d="M195 241L178 232L177 221L195 241Z"
          fill="#9C6652"
          fill-opacity="0.64"
        />
        <path
          d="M159 309L155 301L151 283L159 309Z"
          fill="#3C2217"
          fill-opacity="0.63"
        />
        <path
          d="M134 215L130 190L16 248L134 215Z"
          fill="#DFDFE2"
          fill-opacity="0.27"
        />
        <path
          d="M219 303L210 287L218 314L219 303Z"
          fill="#43271A"
          fill-opacity="0.59"
        />
        <path
          d="M162 242L167 228L156 245L162 242Z"
          fill="#B86D53"
          fill-opacity="0.5"
        />
        <path
          d="M145 309L151 315L150 309H145Z"
          fill="#3D3A4B"
          fill-opacity="0.66"
        />
        <path
          d="M155 309L152 294L158 311L155 309Z"
          fill="#EBF1F0"
          fill-opacity="0.57"
        />
        <path
          d="M174 331L194 334L169 327L174 331Z"
          fill="#353846"
          fill-opacity="0.45"
        />
        <path
          d="M150 284L155 299L153 283L150 284Z"
          fill="#1E0B07"
          fill-opacity="0.33"
        />
        <path
          d="M209 216L216 214L210 204L209 216Z"
          fill="#251F23"
          fill-opacity="0.41"
        />
        <path
          d="M200 333L202 356L192 335L200 333Z"
          fill="#8D8B99"
          fill-opacity="0.57"
        />
        <path
          d="M188 281L180 276L198 265L188 281Z"
          fill="#524135"
          fill-opacity="0.58"
        />
        <path
          d="M138 221L160 210L136 218L138 221Z"
          fill="#99847B"
          fill-opacity="0.76"
        />
        <path
          d="M206 337L199 341L206 342V337Z"
          fill="#272838"
          fill-opacity="0.46"
        />
        <path
          d="M148 141L114 155L141 179L148 141Z"
          fill="#D1D0CC"
          fill-opacity="0.41"
        />
        <path
          d="M208 280L268 303L230 293L208 280Z"
          fill="#D6DDE2"
          fill-opacity="0.5"
        />
        <path
          d="M189 278L188 274L167 276L189 278Z"
          fill="#5D4339"
          fill-opacity="0.5"
        />
        <path
          d="M142 293L120 304L134 300L142 293Z"
          fill="#DDE3E4"
          fill-opacity="0.66"
        />
        <path
          d="M157 157L168 181L139 179L157 157Z"
          fill="#60463D"
          fill-opacity="0.48"
        />
        <path
          d="M175 261L190 268L203 255L175 261Z"
          fill="#9F7662"
          fill-opacity="0.78"
        />
        <path
          d="M179 338L196 340L164 347L179 338Z"
          fill="#000011"
          fill-opacity="0.16"
        />
        <path
          d="M160 219L172 217L164 225L160 219Z"
          fill="#AB7877"
          fill-opacity="0.53"
        />
        <path
          d="M180 226H199L186 228L180 226Z"
          fill="#4C2826"
          fill-opacity="0.55"
        />
        <path
          d="M181 175L185 164L213 190L181 175Z"
          fill="#160905"
          fill-opacity="0.5"
        />
        <path
          d="M155 312L160 311V318L155 312Z"
          fill="#0B0001"
          fill-opacity="0.5"
        />
        <path
          d="M213 208L387 348L213 177V208Z"
          fill="#D7D9DA"
          fill-opacity="0.44"
        />
        <path
          d="M164 272L191 280L192 286L164 272Z"
          fill="#8D6A57"
          fill-opacity="0.5"
        />
        <path
          d="M188 277L192 270L195 272L188 277Z"
          fill="#36291E"
          fill-opacity="0.61"
        />
        <path
          d="M118 308L102 314L137 414L118 308Z"
          fill="#0D0D11"
          fill-opacity="0.46"
        />
        <path
          d="M234 318L214 310L227 290L234 318Z"
          fill="#090909"
          fill-opacity="0.57"
        />
        <path
          d="M151 232H162L148 244L151 232Z"
          fill="#FFEDEB"
          fill-opacity="0.44"
        />
        <path
          d="M176 287L160 305L153 284L176 287Z"
          fill="#FFF2EB"
          fill-opacity="0.38"
        />
        <path
          d="M214 310L217 302L185 307L214 310Z"
          fill="#A17D6B"
          fill-opacity="0.54"
        />
        <path
          d="M161 207L142 185L143 215L161 207Z"
          fill="#F7EDE7"
          fill-opacity="0.35"
        />
        <path
          d="M183 170L174 178L189 175L183 170Z"
          fill="#0C0100"
          fill-opacity="0.56"
        />
        <path
          d="M209 299L190 320L204 266L209 299Z"
          fill="#94715E"
          fill-opacity="0.45"
        />
        <path
          d="M156 322L151 321L161 306L156 322Z"
          fill="#181319"
          fill-opacity="0.33"
        />
        <path
          d="M129 198L140 197L129 205V198Z"
          fill="#281203"
          fill-opacity="0.21"
        />
        <path
          d="M216 229L211 214L217 219L216 229Z"
          fill="#8B2F31"
          fill-opacity="0.49"
        />
        <path
          d="M192 162L201 171L198 172L192 162Z"
          fill="#6C7376"
          fill-opacity="0.55"
        />
        <path
          d="M181 160L165 157L162 163L181 160Z"
          fill="#787062"
          fill-opacity="0.48"
        />
        <path
          d="M141 157L160 155L149 163L141 157Z"
          fill="#BBB5AE"
          fill-opacity="0.46"
        />
        <path
          d="M136 232L138 251V228L136 232Z"
          fill="#F6DFDD"
          fill-opacity="0.73"
        />
        <path
          d="M151 159L144 172L148 178L151 159Z"
          fill="#745F54"
          fill-opacity="0.63"
        />
        <path
          d="M186 240L178 246L189 248L186 240Z"
          fill="#995E59"
          fill-opacity="0.68"
        />
        <path
          d="M185 251L170 245L167 250L185 251Z"
          fill="#FCE0D7"
          fill-opacity="0.39"
        />
        <path
          d="M160 214L162 218L145 225L160 214Z"
          fill="#031836"
          fill-opacity="0.14"
        />
        <path
          d="M148 230L170 224L165 229L148 230Z"
          fill="#E8D1C8"
          fill-opacity="0.51"
        />
        <path
          d="M197 207L213 209L191 218L197 207Z"
          fill="#71564E"
          fill-opacity="0.56"
        />
        <path
          d="M213 336L210 356L240 386L213 336Z"
          fill="#504A4E"
          fill-opacity="0.88"
        />
        <path
          d="M179 206L163 213L175 197L179 206Z"
          fill="#E3BEB3"
          fill-opacity="0.44"
        />
        <path
          d="M172 275L203 240L191 271L172 275Z"
          fill="#B6886F"
          fill-opacity="0.28"
        />
        <path
          d="M149 296L150 284L154 314L149 296Z"
          fill="#838A9D"
          fill-opacity="0.45"
        />
        <path
          d="M155 267L142 240L149 260L155 267Z"
          fill="#CBB6AE"
          fill-opacity="0.54"
        />
        <path
          d="M88 326L113 313L99 315L88 326Z"
          fill="#23272C"
          fill-opacity="0.61"
        />
        <path
          d="M204 320L208 312L179 333L204 320Z"
          fill="#C7B0AA"
          fill-opacity="0.42"
        />
        <path
          d="M148 319L145 337L142 316L148 319Z"
          fill="#090810"
          fill-opacity="0.46"
        />
        <path
          d="M206 353V318L196 360L206 353Z"
          fill="#373947"
          fill-opacity="0.29"
        />
        <path
          d="M179 254H170L196 249L179 254Z"
          fill="#A16D62"
          fill-opacity="0.53"
        />
        <path
          d="M166 273L180 267L157 254L166 273Z"
          fill="#F2DDD2"
          fill-opacity="0.47"
        />
        <path
          d="M207 281L214 303L184 246L207 281Z"
          fill="#926955"
          fill-opacity="0.54"
        />
        <path
          d="M201 172L203 206L212 210L201 172Z"
          fill="#281912"
          fill-opacity="0.38"
        />
        <path
          d="M168 234L174 216L178 234H168Z"
          fill="#FFDBD3"
          fill-opacity="0.45"
        />
        <path
          d="M151 335L147 369L175 395L151 335Z"
          fill="#468ABF"
          fill-opacity="0.5"
        />
        <path
          d="M182 345V329L179 336L182 345Z"
          fill="#8F9098"
          fill-opacity="0.6"
        />
      </svg>
    </>
  )
}
