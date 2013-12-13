/*This Lib is for the Array Operations*/
//var x = [["x", "r", "t"], ["a", "b", "n"], ["j", "l", "x"]];
//var y = [["y", "w", "z"], ["a", "b", "n"], ["j", "l", "x"]];
function arrayArray(x, y)
{
    this.x = x;
    this.y = y;
    this.compareArrayOfArray = function()
    {
        this.objX = arrayOfArrayToArrayOfObject(this.x);
        this.objY = arrayOfArrayToArrayOfObject(this.y);
        this.objSet = compareArrayOfObj(this.objX, this.objY, this.x, this.y);
        return this.objSet;
    }
}

function arrayOfArrayToArrayOfObject(aOfa)
{
    var aOfo = [];
    for (var i = 0; i < aOfa.length; i++)
    {
        aOfo[i] = {};
        if (aOfa[i] instanceof Array)
            for (var j = 0; j < aOfa[i].length; j++)
            {
                aOfo[i][aOfa[i][j]] = i;
            }
        else
            aOfo[i] = aOfa[i];

    }
    return aOfo;
}

Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key))
            size++;
    }
    return size;
};
function compareObjs(oA, oB)
{
    if (Object.size(oA) > Object.size(oB))
    {
        aa = oA;
        ba = oB;
    }
    else
    {
        aa = oB;
        ba = oA;
    }
    for (var property in aa) {
        if (!ba.hasOwnProperty(property)) {
            return false;
        }
    }
    return true;
}
function compareArrayOfObj(aA, aB, x, y)
{
    var aIb = [];
    var aIIndex = [];
    var bIIndex = [];
    var aIF = [];
    var bIF = [];
    if (aA.length > aB.length)
    {
        a = aA;
        b = aB;
    }
    else
    {
        a = aB;
        b = aA;
    }
    for (var i in a)
    {
        for (var j in b)
        {

            if (compareObjs(a[i], b[j]))
            {
                for (var blah in a[i])
                {
                    aIb.push(x[a[i][blah]]);
                    break;
                }
                aIIndex.push(i);
                bIIndex.push(j);

            }
        }
    }
    for (var i in a)
    {
        if (aIIndex.indexOf(i) === -1)
        {
            for (var blah in a[i])
            {
                aIF.push(x[a[i][blah]]);
                break;
            }
        }
    }
    for (var j in b)
    {
        if (bIIndex.indexOf(j) === -1)
        {
            for (var blah in b[j])
            {
                bIF.push(y[b[j][blah]]);
                break;
            }
        }
    }


    return  {"aIb": aIb, "aMb": aIF, "bMa": bIF}
}