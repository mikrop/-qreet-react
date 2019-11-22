# qreet-react

REACT implementace QR kódů pro EET účtenky dle [oficiální specifikace](http://www.etrzby.cz/assets/cs/prilohy/Specifikace-QR-kodu.pdf) pro snadné zpracování údajů na účtenkách registrovaných v systému EET.

```js
import QREet from 'qreet-react';

ReactDOM.render(
  <QREet value="${this.state.value}" />,
  document.getElementById('root')
);

```
