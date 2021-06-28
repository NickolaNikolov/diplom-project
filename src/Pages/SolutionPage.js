import React from 'react';
import Title from '../Components/Title';

const SolutionPage = () => {
    return (
        <div className="SolutionPage">
            <Title title={'Решението'} span={'Решението'}/>
            <table className="table" border="1" id="my-table">
                <thead>
                    <tr>
                        <th>Предпр./ Б. планове</th>
                        <th>Предприятие 1</th>
                        <th>Предприятие 2</th>
                        <th>Предприятие 3</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th rowspan="2">Бизнес план 1</th>
                        <td>
                            <input type="num" id="number" name="invest11" placeholder="Инвестиция 1.1"/>
                        </td>
                        <td>
                            <input type="num" id="number" name="invest12" placeholder="Инвестиция 1.2"/>
                        </td>
                        <td>
                            <input type="num" id="number" name="invest13" placeholder="Инвестиция 1.3"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="num" id="number" name="income11" placeholder="Печалба 1.1"/>
                        </td>
                        <td>
                            <input type="num" id="number" name="income12" placeholder="Печалба 1.2"/>
                        </td>
                        <td>
                            <input type="num" id="number" name="income13" placeholder="Печалба 1.3"/>
                        </td>
                    </tr>
                    <tr>
                        <th rowspan="2">Бизнес план 2</th>
                        <td>
                            <input type="num" id="number" name="invest21" placeholder="Инвестиция 2.1"/>
                        </td>
                        <td>
                            <input type="num" id="number" name="invest22" placeholder="Инвестиция 2.2"/>
                        </td>
                        <td>
                            <input type="num" id="number" name="invest23" placeholder="Инвестиция 2.3"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="num" id="number" name="income21" placeholder="Печалба 2.1"/>
                        </td>
                        <td>
                            <input type="num" id="number" name="income22" placeholder="Печалба 2.2"/>
                        </td>
                        <td>
                            <input type="num" id="number" name="income23" placeholder="Печалба 2.3"/>
                        </td>
                    </tr>
                    <tr>
                        <th rowspan="2">Бизнес план 3</th>
                        <td>
                            <input type="num" id="number" name="invest31" placeholder="Инвестиция 3.1"/>
                        </td>
                        <td>
                            <input type="num" id="number" name="invest32" placeholder="Инвестиция 3.2"/>
                        </td>
                        <td>
                            <input type="num" id="number" name="invest33" placeholder="Инвестиция 3.3"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="num" id="number" name="income31" placeholder="Печалба 3.1"/>
                        </td>
                        <td>
                            <input type="num" id="number" name="income32" placeholder="Печалба 3.2"/>
                        </td>
                        <td>
                            <input type="num" id="number" name="income33" placeholder="Печалба 3.3"/>
                        </td>
                    </tr>
                </tbody>
            </table>
            <button className="table-button">Изпрати данни</button>
        </div>
    );
}

export default SolutionPage;
