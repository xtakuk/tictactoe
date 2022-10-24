
const express = require('express');
const mysql = require('mysql');

const app = express();

app.use(express.urlencoded({extended: false}));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'K@taku0714_MySQL',
  database: 'tictable'
});

connection.connect((err) => {
  if (err) {
    console.log('error connecting: ' + err.stack);
    return;
  }
  console.log('success');
});

//データベースの表示
app.get('/', (req, res) => {
  connection.query(
    'SELECT * FROM tictactoe',
    (error, results) => {
      res.render('index.ejs', {tictactoe: results});
    }
  );
});

//リンク
//row1-1
app.get('/row1-1', (req, res) => {
  res.render('Row1-1.ejs');
});

//row1-2
app.get('/row1-2', (req, res) => {
  res.render('Row1-2.ejs');
});

//row1-3
app.get('/row1-3', (req, res) => {
  res.render('Row1-3.ejs');
});

//row2-1
app.get('/row2-1', (req, res) => {
  res.render('Row2-1.ejs');
});

//row2-2
app.get('/row2-2', (req, res) => {
  res.render('Row2-2.ejs');
});

//row2-3
app.get('/row2-3', (req, res) => {
  res.render('Row2-3.ejs');
});

//row3-1
app.get('/row3-1', (req, res) => {
  res.render('Row3-1.ejs');
});

//row3-2
app.get('/row3-2', (req, res) => {
  res.render('Row3-2.ejs');
});

//row3-3
app.get('/row3-3', (req, res) => {
  res.render('Row3-3.ejs');
});

app.get('/restart-table', (req, res) => {
  res.render('Restart-table.ejs');
});

app.get('/set-table', (req, res) => {
  res.render('set-table.ejs');
});
//テーブルスタート
//テーブル1-1を〇にする
app.post('/RowOne-1O', (req,res) => {
  connection.query(
    'UPDATE tictactoe SET rowone = "○" WHERE id = 1',
    [req.body.tictactoeRow1O],
    (error, results) => {
      res.render('Back2main.ejs')
    }
  )
})

//Tic toc toe 1-1を×にする
app.post('/RowOne-1X', (req,res) => {
  connection.query(
    'UPDATE tictactoe SET rowone = "×" WHERE id = 1',
    [req.body.tictactoeRow1X],
    (error, results) => {
      res.render('Back2main.ejs')
    }
  )
})

//テーブル1-1を〇にする
app.post('/RowOne-2O', (req,res) => {
  connection.query(
    'UPDATE tictactoe SET rowone = "○" WHERE id = 2',
    [req.body.tictactoeRow2O],
    (error, results) => {
      res.render('Back2main.ejs')
    }
  )
})

//Tic toc toe 1-2を×にする
app.post('/RowOne-2X', (req,res) => {
  connection.query(
    'UPDATE tictactoe SET rowone = "×" WHERE id = 2',
    [req.body.tictactoeRow2X],
    (error, results) => {
      res.render('Back2main.ejs')
    }
  )
})

//テーブル1-3を〇にする
app.post('/RowOne-3O', (req,res) => {
  connection.query(
    'UPDATE tictactoe SET rowone = "○" WHERE id = 3',
    [req.body.tictactoeRow3O],
    (error, results) => {
      res.render('Back2main.ejs')
    }
  )
})

//テーブル 1-3を×にする
app.post('/RowOne-3X', (req,res) => {
  connection.query(
    'UPDATE tictactoe SET rowone = "×" WHERE id = 3',
    [req.body.tictactoeRow3X],
    (error, results) => {
      res.render('Back2main.ejs')
    }
  )
})

//Row2-1 テーブル
//テーブル2-1を〇にする
app.post('/RowTwo-1O', (req,res) => {
  connection.query(
    'UPDATE tictactoe SET rowtwo = "○" WHERE id = 1',
    [req.body.tictactoeRowTwo1O],
    (error, results) => {
      res.render('Back2main.ejs')
    }
  )
})

//テーブル 2-1を×にする
app.post('/RowTwo-1X', (req,res) => {
  connection.query(
    'UPDATE tictactoe SET rowtwo = "×" WHERE id = 1',
    [req.body.tictactoeRowTwo1X],
    (error, results) => {
      res.render('Back2main.ejs')
    }
  )
})

//テーブル2-2を〇にする
app.post('/RowTwo-2O', (req,res) => {
  connection.query(
    'UPDATE tictactoe SET rowtwo = "○" WHERE id = 2',
    [req.body.tictactoeRowTwo2O],
    (error, results) => {
      res.render('Back2main.ejs')
    }
  )
})

//テーブル 2-2を×にする
app.post('/RowTwo-2X', (req,res) => {
  connection.query(
    'UPDATE tictactoe SET rowtwo = "×" WHERE id = 2',
    [req.body.tictactoeRowTwo2X],
    (error, results) => {
      res.render('Back2main.ejs')
    }
  )
})

//テーブル2-3を〇にする
app.post('/RowTwo-3O', (req,res) => {
  connection.query(
    'UPDATE tictactoe SET rowtwo = "○" WHERE id = 3',
    [req.body.tictactoeRowTwo3O],
    (error, results) => {
      res.render('Back2main.ejs')
    }
  )
})

//テーブル 2-3を×にする
app.post('/RowTwo-3X', (req,res) => {
  connection.query(
    'UPDATE tictactoe SET rowtwo = "×" WHERE id = 3',
    [req.body.tictactoeRowTwo3X],
    (error, results) => {
      res.render('Back2main.ejs')
    }
  )
})

//テーブルRow3-X
//テーブル3-1を〇にする
app.post('/RowThree-1O', (req,res) => {
  connection.query(
    'UPDATE tictactoe SET rowthree = "○" WHERE id = 1',
    [req.body.tictactoeRowThree1O],
    (error, results) => {
      res.render('Back2main.ejs')
    }
  )
})

//テーブル 3-1を×にする
app.post('/RowThree-1X', (req,res) => {
  connection.query(
    'UPDATE tictactoe SET rowthree = "×" WHERE id = 1',
    [req.body.tictactoeRowThree1X],
    (error, results) => {
      res.render('Back2main.ejs')
    }
  )
})

//テーブル3-2を〇にする
app.post('/RowThree-2O', (req,res) => {
  connection.query(
    'UPDATE tictactoe SET rowthree = "○" WHERE id = 2',
    [req.body.tictactoeRowThree2O],
    (error, results) => {
      res.render('Back2main.ejs')
    }
  )
})

//テーブル 3-2を×にする
app.post('/RowThree-2X', (req,res) => {
  connection.query(
    'UPDATE tictactoe SET rowthree = "×" WHERE id = 2',
    [req.body.tictactoeRowThree2X],
    (error, results) => {
      res.render('Back2main.ejs')
    }
  )
})

//テーブル3-3を〇にする
app.post('/RowThree-3O', (req,res) => {
  connection.query(
    'UPDATE tictactoe SET rowthree = "○" WHERE id = 3',
    [req.body.tictactoeRowThree2O],
    (error, results) => {
      res.render('Back2main.ejs')
    }
  )
})

//テーブル 3-3を×にする
app.post('/RowThree-3X', (req,res) => {
  connection.query(
    'UPDATE tictactoe SET rowthree = "×" WHERE id = 3',
    [req.body.tictactoeRowThree3X],
    (error, results) => {
      res.render('Back2main.ejs')
    }
  )
})

//テーブルをリセットする
app.post('/delatetable', (req,res) => {
  connection.query(
    'DELETE FROM tictactoe WHERE id BETWEEN 1 and 3',
    [req.body.deletetable],
    (error, results) => {
      res.render('set-table.ejs')
    }
  )
})

app.post('/settable', (req,res) => {
  connection.query(
    'INSERT INTO tictactoe value("1", "□", "□", "□"), ("2", "□", "□", "□"), ("3", "□", "□", "□")',
    [req.body.insert2table],
    (error, results) => {
      res.render('Back2main.ejs')
    }
  )
})
app.listen(5000);
